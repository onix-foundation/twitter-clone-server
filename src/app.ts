import express from "express";

  const app = express();

  app.use(express.json());
  
  app.use("/users", userRouter);


  export default app;
