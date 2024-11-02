export interface CloudinaryAdapter {
  uploadImage(filePath: string): Promise<string>;
  deleteImage(publicId: string): Promise<void>;
}
