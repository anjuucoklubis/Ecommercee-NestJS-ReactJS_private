import React from "react";

function CardProduct() {
  const dataa = [
    {
      id: 1,
      name: "Jam tangan mantap",
      price: 100,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
    {
      id: 2,
      name: "Jam tangan mantap",
      price: 100,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
    {
      id: 3,
      name: "Jam tangan mantap",
      price: 100,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
    {
      id: 4,
      name: "Jam tangan mantap",
      price: 100,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
    {
      id: 5,
      name: "Jam tangan mantap",
      price: 100,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
    {
      id: 6,
      name: "Jam tangan mantap",
      price: 100,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
    {
      id: 7,
      name: "Jam tangan mantap",
      price: 100,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
    {
      id: 8,
      name: "Jam tangan mantap",
      price: 100,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
    {
      id: 9,
      name: "Jam tangan mantap",
      price: 100,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
    {
      id: 10,
      name: "Jam tangan mantap",
      price: 100,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
    {
      id: 11,
      name: "Jam tangan mantap",
      price: 100,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
    {
      id: 12,
      name: "Jam tangan mantap",
      price: 100,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
    {
      id: 13,
      name: "Jam tangan mantap",
      price: 100,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
    {
      id: 14,
      name: "Jam tangan mantap",
      price: 100,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
  ];

  return (
    <div className="">
      <p style={{ fontSize: 30, fontWeight: "bold", marginLeft: 20 }}>
        Start exploring Product.
        <p style={{ color: "#4B5563"}}>
          Good things are waiting for you
        </p>
      </p>

      <div className="flex flex-wrap justify-center">
        {dataa.map((data) => (
          <div
            key={data.id}
            className="w-full max-w-sm mx-4 mb-8 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
          >
            <a href="#">
              <img
                className="w-full h-64 object-cover"
                src={data.image}
                alt="product image"
              />
            </a>
            <div className="p-4">
              <a href="#">
                <h5 className="text-xl font-semibold mb-2 text-gray-900">
                  {data.name}
                </h5>
              </a>
              <div className="flex items-center mb-2">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  5.0
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">
                  ${data.price}
                </span>
                <a
                  href="#"
                  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                >
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardProduct;
