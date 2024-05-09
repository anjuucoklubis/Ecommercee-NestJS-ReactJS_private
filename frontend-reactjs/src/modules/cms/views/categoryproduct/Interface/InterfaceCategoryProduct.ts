export interface GetCategoryProductAllInterface {
  id: number;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetCategoryProductDetailInterface {
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface ShowModalCategoryProductDetailInterface {
  name: string;
  image: string;
}

export interface FormDataUpdateCategoryProductInterface {
  name: string;
  image: File | null;
}
