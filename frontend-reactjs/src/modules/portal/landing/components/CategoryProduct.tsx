import React from "react";

import { CategoryProductLandingInterface } from "../Interface/LandingInterface";
import VMLanding from "../VMLanding.ts";
function CategoryProduct() {
  const { imageSrcCategory, categories } = VMLanding();

  return (
    <div className="">
      <p style={{ fontSize: 30, fontWeight: "bold", marginLeft: 20 }}>
        Kategori
      </p>
      <div className="flex flex-wrap justify-center">
        {categories.map(
          (data: CategoryProductLandingInterface, index: number) => (
            <div key={index} className="p-0">
              <div className="max-w-40 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src={`${imageSrcCategory}/${data.image}`}
                    alt=""
                  />
                </a>
                <div className="p-2 justify-center">
                  <a href="#">
                    <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                      {data.name}
                    </h5>
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default CategoryProduct;
