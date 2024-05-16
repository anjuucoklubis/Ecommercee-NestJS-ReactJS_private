import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ViewIcon from "../../components/icons/crud/ViewIcon.tsx";
import DeleteIcon from "../../components/icons/crud/DeleteIcon.tsx";
import UpdateIcon from "../../components/icons/crud/UpdateIcon.tsx";
import VMGetProduct from "./ViewModel/VMGetProduct.ts";
import Cursorr from "../utils/Cursorr.tsx";
import VMDeleteProduct from "./ViewModel/VMDeleteProduct.ts";
import VMCreateProduct from "./ViewModel/VMCreateProduct.ts";
import VMUpdateProduct from "./ViewModel/VMUpdateProduct.ts";
function Product() {
  const {
    product,
    showModalViewDetailProduct,
    setShowModalViewDetailProduct,
    getproductDetail,
    imageSrc,
    getProductByID,
    combinedDate,
  } = VMGetProduct();

  const {
    showModalCreateProduct,
    setShowModalCreateProduct,
    handleInputChange,
    handleImageChange,
    handleCategoryChange,
    formDataCreateProduct,
    getAllCategoryforCreateProduct,
    selectedCategory,
    handleSubmitCreateProduct,
  } = VMCreateProduct();

  const {
    handleShowModalDetailCategoryForUpdate,
    showModalDetailProductForUpdate,
    setShowModalDetailProductForUpdate,
    productDetailForUpdate,
    setProductDetailForUpdate,
    handleSubmitUpdateProduct,
    formDataUpdate,
    setFormDataUpdate,
    handleInputChangeUpdateProduct,
    handleImageChangeUpdateProduct,
    handleCategoryChangeForUpdate,
  } = VMUpdateProduct();
  const {
    handleConfirmDelete,
    handleCancelDelete,
    itemToDelete,
    setItemToDelete,
  } = VMDeleteProduct();
  const { handleMouseEnter, handleMouseLeave, fullClassname } = Cursorr();

  return (
    <div className="mt-5 h-full grid-cols-1 gap-5 md:grid-cols-2">
      <ToastContainer />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div
          className="flex pb-5 bg-white dark:bg-gray-900 justify-between"
          style={{ paddingRight: "50px", paddingLeft: "50px" }}
        >
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>

          <div className="  flex-1 relative mt-6">
            <form className="w-full max-w-sm">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Cari Produk..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Cari...
                </button>
              </div>
            </form>
          </div>

          <div className="mt-6">
            <button
              type="button"
              className="text-black font-semibold bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => setShowModalCreateProduct(true)}
            >
              Tambah Produk
            </button>
          </div>
        </div>

        {showModalViewDetailProduct && getproductDetail && (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative min-w-[700px] my-6 mx-auto max-w-screen-xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Detail Produk
                    </h2>
                    <div
                      className="flex items-center space-x-4"
                      style={{ marginLeft: 8 }}
                    >
                      <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-400">
                        {getproductDetail.name}
                      </h3>
                    </div>

                    <button
                      type="button"
                      className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="authentication-modal"
                      onClick={() => setShowModalViewDetailProduct(false)}
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <form className="p-4 md:p-5">
                      <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Kategori Produk
                          </label>

                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder={""}
                            required
                            value={getproductDetail?.category?.name || ""}
                            disabled={true}
                          />
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Deskripsi Produk
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder={""}
                            required
                            value={getproductDetail.description}
                            disabled={true}
                          />
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Harga Produk
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder={""}
                            required
                            value={getproductDetail.price}
                            disabled={true}
                          />
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Stok Produk
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder={""}
                            required
                            value={getproductDetail.stock}
                            disabled={true}
                          />
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Dibuat - Diubah
                          </label>
                          <div className="flex items-center justify-center w-full">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder={""}
                              required
                              value={combinedDate}
                              disabled={true}
                            />
                          </div>
                        </div>

                        <div className="col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Gambar Produk
                          </label>
                          <div className="flex items-center justify-center w-full">
                            <img
                              className="w-64 rounded-lg"
                              src={`${imageSrc}/${getproductDetail.image}`}
                              alt="produk.png"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {showModalCreateProduct ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative min-w-[700px] my-6 mx-auto max-w-screen-xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Tambah Produk Baru
                    </h3>

                    <button
                      type="button"
                      className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="authentication-modal"
                      onClick={() => setShowModalCreateProduct(false)}
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <form
                      className="p-4 md:p-5"
                      onSubmit={handleSubmitCreateProduct}
                    >
                      <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Nama Produk
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Masukkan Nama Produk..."
                            required
                            value={formDataCreateProduct.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Deskripsi Produk
                          </label>
                          <input
                            type="text"
                            name="description"
                            id="description"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Masukkan Deskripsi Produk..."
                            required
                            value={formDataCreateProduct.description}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="categoryId"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Kategori Produk{" "}
                          </label>
                          <select
                            className="text-whit bg-gray-50 border border-gray-300 w-full p-2.5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                          >
                            <option value="">Pilih Kategori</option>
                            {getAllCategoryforCreateProduct.map((category) => (
                              <option key={category.id} value={category.id}>
                                {category.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="price"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Harga Produk
                          </label>
                          <input
                            type="number"
                            name="price"
                            id="price"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Masukkan Harga Produk..."
                            required
                            value={formDataCreateProduct.price}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="stock"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Stok Produk
                          </label>
                          <input
                            type="number"
                            name="stock"
                            id="stock"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Masukkan Stok Produk..."
                            required
                            value={formDataCreateProduct.stock}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="image"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Gambar Produk
                          </label>
                          <div className="flex items-center justify-center w-full">
                            <label
                              htmlFor="dropzone-file"
                              className="flex flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 20 16"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                  />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                  <span className="font-semibold">
                                    Klik untuk mengunggah{" "}
                                  </span>{" "}
                                  atau seret dan lepas{" "}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                              </div>
                              <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                onChange={handleImageChange}
                              />
                            </label>
                          </div>
                        </div>

                        {formDataCreateProduct.image && (
                          <div className="col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Preview
                            </label>
                            <img
                              src={URL.createObjectURL(
                                formDataCreateProduct.image
                              )}
                              alt="Preview"
                              className="w-28 mb-2 h-auto max-w-lg rounded-lg"
                            />
                          </div>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        <svg
                          className="me-1 -ms-1 w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Tambah Produk{" "}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}

        {showModalDetailProductForUpdate && productDetailForUpdate && (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative min-w-[700px] my-6 mx-auto max-w-screen-xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Ubah Produk
                    </h3>
                    <button
                      type="button"
                      className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="authentication-modal"
                      onClick={() => setShowModalDetailProductForUpdate(false)}
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <form
                      className="p-4 md:p-5"
                      onSubmit={handleSubmitUpdateProduct}
                    >
                      <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Nama Produk
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder={""}
                            value={formDataUpdate.name} // Gunakan nilai state formDataUpdate sebagai value
                            onChange={handleInputChangeUpdateProduct}
                          />
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Deskripsi Produk
                          </label>
                          <input
                            type="text"
                            name="description"
                            id="description"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder={""}
                            value={formDataUpdate.description} // Gunakan nilai state formDataUpdate sebagai value
                            onChange={handleInputChangeUpdateProduct}
                          />
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="price"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Harga Produk
                          </label>
                          <input
                            type="number"
                            name="price"
                            id="price"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder={""}
                            value={formDataUpdate.price} // Gunakan nilai state formDataUpdate sebagai value
                            onChange={handleInputChangeUpdateProduct}
                          />
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="stock"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Stok Produk
                          </label>
                          <input
                            type="number"
                            name="stock"
                            id="stock"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder={""}
                            value={formDataUpdate.stock} // Gunakan nilai state formDataUpdate sebagai value
                            onChange={handleInputChangeUpdateProduct}
                          />
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="categoryId"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Kategory Produk
                          </label>
                          <select
                            className="text-whit bg-gray-50 border border-gray-300 w-full p-2.5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                          >
                            <option value={formDataUpdate.categoryId}>
                              Kategori Sekarang : {formDataUpdate.categoryId}
                            </option>
                            {getAllCategoryforCreateProduct.map((category) => (
                              <option key={category.id} value={category.id}>
                                {category.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Gambar Produk
                          </label>
                          <div className="flex items-center justify-center w-full">
                            <label
                              htmlFor="dropzone-file"
                              className="flex flex-col items-center justify-center w-full h-22 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 20 16"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                  />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                  <span className="font-semibold">
                                    Klik untuk mengunggah
                                  </span>{" "}
                                  atau seret dan lepas
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                              </div>
                              <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                onChange={handleImageChangeUpdateProduct}
                              />
                            </label>
                          </div>
                        </div>

                        <div className="col-span-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Gambar Sekarang
                          </label>
                          <img
                            src={`${imageSrc}/${productDetailForUpdate.image}`}
                            alt="produk.png"
                            className="w-28 mb-2 h-auto max-w-lg rounded-lg"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        <svg
                          className="me-1 -ms-1 w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Ubah Produk
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama Produk
              </th>
              <th scope="col" className="px-6 py-3">
                Stok Produk
              </th>
              <th scope="col" className="px-6 py-3">
                Harga Produk
              </th>

              <th scope="col" className="px-6 py-3">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {product.map((data, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {data.name}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {data.stock}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {"Rp."} {data.price}
                  {".00"}
                </td>
                <td className="flex px-6 py-4" style={{ flexDirection: "row" }}>
                  <button
                    type="button"
                    className={fullClassname}
                    onClick={() => getProductByID(data.id)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ViewIcon />
                    <span className="sr-only">View item</span>
                  </button>
                  <button
                    type="button"
                    className={fullClassname}
                    onClick={() =>
                      handleShowModalDetailCategoryForUpdate(data.id)
                    }
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <UpdateIcon />
                    <span className="sr-only">Edit item</span>
                  </button>
                  <button
                    type="button"
                    className={fullClassname}
                    onClick={() => setItemToDelete(data.id)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <DeleteIcon />
                    <span className="sr-only">Delete item</span>
                  </button>
                </td>
              </tr>
            ))}
            {itemToDelete && (
              <div
                id="popup-modal"
                className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
              >
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Konfirmasi Hapus</h3>

                  <p className="mb-6">
                    Apakah Anda yakin ingin menghapus item ini?
                  </p>
                  <div className="flex justify-end">
                    <button
                      className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md mr-2"
                      onClick={handleConfirmDelete}
                    >
                      Ya, saya yakin
                    </button>
                    <button
                      className="text-gray-800 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
                      onClick={handleCancelDelete}
                    >
                      Tidak, batalkan
                    </button>
                  </div>
                </div>
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Product;
