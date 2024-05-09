import React, { useEffect, useState } from "react";
import axios from "axios";

function CategoryProduct() {
  const [categories, setCategories] = useState([]);
  const getData = async () => {
    await axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="">
      <p style={{ fontSize: 30, fontWeight: "bold", marginLeft: 20 }}>
        Kategori
      </p>
      <div className="flex flex-wrap justify-center">
        {categories.map((data, index) => (
          <div key={index} className="p-0">
            <div className="max-w-40 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="https://media.istockphoto.com/id/1711123572/id/foto/startup-ukm-pengusaha-usaha-kecil-wanita-asia-freelance-menggunakan-smartphone-dengan-kotak.jpg?s=612x612&w=0&k=20&c=wNxjddwHsOauKhn7ej0NBR1szpFVQzO-qqxNIP8J1M4="
                  alt=""
                />
              </a>
              <div className="p-2 justify-center">
                <a href="#">
                  <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                    {data}
                  </h5>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryProduct;
