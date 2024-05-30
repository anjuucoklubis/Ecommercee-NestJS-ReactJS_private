import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import {
  ProductDetailInterface,
  ProductLandingInterface,
} from "./Interface/LandingInterface.ts";
import React from "react";
import {useNavigate, useParams} from 'react-router-dom';
import { useAxios } from "../../../guard/hook.js";

function VMLanding() {
  
  /*View Model for Category */
  const imageSrcCategory = "http://localhost:3000/category";
  const imageSrcProduct = "http://localhost:3000/product";
  const [categories, setCategories] = useState([]);
  const getDataCategory = async () => {
    await axios
      .get("http://localhost:3000/categoryproduct/get")
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      });
  };
  useEffect(() => {
    getDataCategory();
  }, []);

  /*View Model for Product */
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const axios = useAxios();

  const getDataProduct = async () => {

    await axios.get("http://localhost:3000/product/get").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };
  useEffect(() => {
    getDataProduct();
  }, []);

 
  const navigate = useNavigate()
  const handleDirectToDetailProduct = (productId) => {
    navigate(`/detail-product/${productId}`);
  };


  /*View Model for Carousel */
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return {
    imageSrcCategory,
    imageSrcProduct,
    categories,
    products,
    slides,
    prevSlide,
    nextSlide,
    goToSlide,
    currentIndex,
    handleDirectToDetailProduct,
  };
}

export default VMLanding;
