export interface GetAllProductInterface {
  id: number;
  name: string;
  description: string;
  price: string;
  stock: string;
  image: string;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
}

export interface GetDetailProductInterface {
  name: string;
  description: string;
  price: string;
  stock: string;
  image: string;
  category: {
    name: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface GetAllCategoryProductForCreateProductInterface {
  id: number;
  name: string;
}

export interface GetDetailProductShowModalForUpdateInteface {
  name: string;
  description: string;
  price: string;
  stock: string;
  image: string;
  category: {
    name: string;
  };
}

export interface FormDataUpdateProductInterface {
  name: string;
  description: string;
  price: string;
  stock: string;
  image: File | null;
  categoryId: string;
}

export interface GetAllCategoryProductForUpdateProductInterface {
  id: number;
  name: string;
}
