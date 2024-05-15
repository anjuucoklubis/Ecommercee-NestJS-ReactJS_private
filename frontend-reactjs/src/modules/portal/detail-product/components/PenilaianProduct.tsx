import React from "react";

function PenilaianProduct() {
  return (
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-5"
      style={{ marginTop: 20 }}
    >
      <div
        className=" border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
        style={{
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 30,
          marginBottom: 20,
        }}
      >
        <span className="text-lg font-semibold text-gray-900 dark:text-white">
          Penilaian Product
        </span>
        <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
          <li>
            <a
              href="#"
              className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <img
                className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
                src="/docs/images/people/profile-picture-4.jpg"
                alt="Laura Romeros image"
              />
              <div className="text-gray-600 dark:text-gray-400">
                <div className="text-base font-normal">
                  <span className="font-medium text-gray-900 dark:text-white">
                    Laura Romeros
                  </span>{" "}
                </div>
                <div className="items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                  2024-05-15 13:00{" "}
                </div>
                <span className=" text-sm font-normal">
                  menuurt saya proud Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit.
                </span>
              </div>
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default PenilaianProduct;
