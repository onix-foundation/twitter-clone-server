import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as OAuth2Strategy } from 'passport-oauth2';

import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';
import { User, UserInput, UserRepository } from '../../../contexts/user/domain';

interface PassportAdapterOptions {
  userRepository: UserRepository;
  jwtSecret: string;
  frontendUrl: string;
}

export const configurePassport = (options: PassportAdapterOptions) => {
  const { userRepository, jwtSecret, frontendUrl } = options;

  // Local Strategy for username/password authentication
  passport.use(
    new LocalStrategy(
      { usernameField: 'email', passwordField: 'password' },
      async (email, password, done) => {
        try {
          const user = await userRepository.getUserByEmail(email);
          if (!user) {
            return done(null, false, { message: 'Incorrect email.' });
          }

          const isValid = await options.userRepository.verifyPassword(
            user,
            password
          );
          if (!isValid) {
            return done(null, false, { message: 'Incorrect password.' });
          }

          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  // OAuth2 Strategy Example (e.g., GitHub)
  passport.use(
    new OAuth2Strategy(
      {
        authorizationURL: 'https://provider.com/oauth2/authorize',
        tokenURL: 'https://provider.com/oauth2/token',
        clientID: process.env.OAUTH_CLIENT_ID!,
        clientSecret: process.env.OAUTH_CLIENT_SECRET!,
        callbackURL: `${frontendUrl}/auth/oauth2/callback`,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const email = profile.emails[0].value;
          let user = await userRepository.getUserByEmail(email);
          if (!user) {
            user = await userRepository.createUser({
              email,
              password: '',
              username: profile.username,
            } as UserInput);
          }
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  // JWT Strategy for protecting routes
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwtSecret,
      },
      async (payload, done) => {
        try {
          const user = await userRepository.getUserByEmail(payload.email);
          if (user) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        } catch (error) {
          return done(error, false);
        }
      }
    )
  );

  passport.serializeUser((user: User, done) => {
    done(null, user.userId);
  });

  passport.deserializeUser(async (id: string, done) => {
    try {
      const user = await userRepository.getUserById(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
};

export const initializePassport = () => passport.initialize();
export const passportSession = () => passport.session();
