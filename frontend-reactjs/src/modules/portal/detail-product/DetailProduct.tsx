import React from "react";
import Navbar from "../components/Navbar.tsx";
import FooterComponents from "../components/FooterComponents.tsx";
import SpesifikasiProduct from "./components/SpesifikasiProduct.tsx";
import VMLanding from "../landing/VMLanding.ts";
import VMDetailProduct from "./VMDetailProduct.ts";
import PenilaianProduct from "./components/PenilaianProduct.tsx";

function DetailProduct() {
  const { productDetail,imageSrc } = VMDetailProduct();
  return (
    <div>
      {productDetail && (
        <>
          <Navbar />
          <div
            className="flex"
            style={{
              marginTop: 35,
              marginBottom: 20,
              justifyContent: "space-around",
            }}
          >
            <div className="w-full max-w-lg max-h-full bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={`${imageSrc}/${productDetail.image}`}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {productDetail.name}
                  </h5>
                </a>
              </div>
            </div>

            {/*kotak kanan */}
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              {/* <a href="#">
      <img
        className="p-8 rounded-t-lg"
        src="https://flowbite.com/docs/images/products/apple-watch.png"
        alt="product image"
      />
    </a> */}
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {productDetail.name}
                  </h5>
                </a>
              </div>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-red-900 dark:text-white">
                    Rp. {productDetail.price} - Stock {productDetail.stock}
                  </h5>
                </a>
              </div>

              <div
                className="flex px-5 pb-5"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <a href="#">
                    <h5 className="text-xl  tracking-tight text-black dark:text-white">
                      Kuantitas
                    </h5>
                  </a>
                </div>
                <div className="flex items-center">
                  <button
                    className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <span className="sr-only">Quantity button</span>
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <div>
                    <input
                      type="number"
                      id="first_product"
                      className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="1"
                      required
                    />
                  </div>
                  <button
                    className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <span className="sr-only">Quantity button</span>
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div
                className="flex px-5 pb-5"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <a href="#">
                    <h5 className="text-xl  tracking-tight text-black dark:text-white">
                      Total
                    </h5>
                  </a>
                </div>
                <div className="flex items-center">
                  <td className="font-semibold text-gray-900 dark:text-white">
                    $2499
                  </td>
                </div>
              </div>
              <div className="px-5 pb-5">
                <div>
                  <a
                    href="#"
                    className="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className=""
            style={{
              marginTop: 100,
            }}
          >
            <SpesifikasiProduct />
            <PenilaianProduct/>

          </div>
          <FooterComponents />
        </>
      )}
    </div>
  );
}

export default DetailProduct;
