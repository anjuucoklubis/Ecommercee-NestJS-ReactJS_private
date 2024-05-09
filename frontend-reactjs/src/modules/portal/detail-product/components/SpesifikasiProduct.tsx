import React from "react";

function SpesifikasiProduct() {
  return (
    <div>
      {/* <div classNameName="relative overflow-x-auto">
        <table classNameName="w-6/12 text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead classNameName="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" classNameName="px-6 py-3 rounded-s-lg">
              Spesifikasi Produk              </th>
            </tr>
          </thead>
          <tbody>
            <tr classNameName= "bg-white dark:bg-gray-800">
              <th
                scope="row"
                classNameName="flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" 
                style={{justifyContent:"space-around"}}
              >
                Apple MacBook Pro 17" 
                <th style={{marginLeft: 950}}>wkk</th>
              </th>
            </tr>
          </tbody>
        </table>
      </div> */}

      <div className="p-20 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <time className="text-lg font-semibold text-gray-900 dark:text-white">
          Spesifikasi Produk
        </time>
        <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
          <li>
            <a
              href="#"
              className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <img
                className="w-5 h-5 mb-3 me-3 rounded-full sm:mb-0"
                src="https://cdn-icons-png.flaticon.com/128/15673/15673832.png"
                alt="Laura Romeros image"
              />
              <div className="text-gray-600 dark:text-gray-400">
                <div className="text-base font-normal">
                  Kategori :{" "}
                  <span
                    style={{ marginLeft: 10 }}
                    className="font-medium text-gray-900 dark:text-white"
                  >
                    Laura Romeros
                  </span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <img
                className="w-5 h-5 mb-3 me-3 rounded-full sm:mb-0"
                src="https://cdn-icons-png.flaticon.com/128/15673/15673832.png"
                alt="Laura Romeros image"
              />
              <div className="text-gray-600 dark:text-gray-400">
                <div className="text-base font-normal">
                  Kategori :{" "}
                  <span
                    style={{ marginLeft: 10 }}
                    className="font-medium text-gray-900 dark:text-white"
                  >
                    Laura Romeros
                  </span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <img
                className="w-5 h-5 mb-3 me-3 rounded-full sm:mb-0"
                src="https://cdn-icons-png.flaticon.com/128/15673/15673832.png"
                alt="Laura Romeros image"
              />
              <div className="text-gray-600 dark:text-gray-400">
                <div className="text-base font-normal">
                  Kategori :{" "}
                  <span
                    style={{ marginLeft: 10 }}
                    className="font-medium text-gray-900 dark:text-white"
                  >
                    Laura Romeros
                  </span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <img
                className="w-5 h-5 mb-3 me-3 rounded-full sm:mb-0"
                src="https://cdn-icons-png.flaticon.com/128/15673/15673832.png"
                alt="Laura Romeros image"
              />
              <div className="text-gray-600 dark:text-gray-400">
                <div className="text-base font-normal">
                  Kategori :{" "}
                  <span
                    style={{ marginLeft: 10 }}
                    className="font-medium text-gray-900 dark:text-white"
                  >
                    Laura Romeros
                  </span>
                </div>
              </div>
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default SpesifikasiProduct;
