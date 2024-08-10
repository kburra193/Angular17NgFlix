export type ImagesDto = {
  backdrops: Image[];
};

export type Image = {
  aspectRatio: number;
  file_path: string;
  height: number;
  width: number;
};
