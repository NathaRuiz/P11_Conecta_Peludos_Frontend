import React, { useState, useEffect } from "react";
import Perros from "../../assets/images/Perro.svg";
import Gatos from "../../assets/images/Gato.svg";
import Loros from "../../assets/images/Loro.svg";
import Conejos from "../../assets/images/Conejo.svg";
import Otros from "../../assets/images/Otros.svg";
import Huella from "../../assets/images/Huella.svg";
import UseApi from "../../services/UseApi";
import { Link } from "react-router-dom";

const AnimalCategoryHome = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const categoriesData = await UseApi.getCategories();
          setCategories(categoriesData);
        } catch (error) {
          console.error("Error al obtener categorias:", error);
        }
      };
      fetchCategories();
    }, []);
  
    const getImageByCategory = (category) => {
        switch (category.name) {
          case "Perros":
            return Perros;
          case "Gatos":
            return Gatos;
          case "Pájaros":
            return Loros;
          case "Conejos":
            return Conejos;
          case "Otros":
            return Otros;
          default:
            return Huella;
        }
      };

  return (
    <Link to='/adopta' className="mt-6">
      <h2 className="text-center text-primaryColor font-bold my-2">
      En nuestra plataforma encontrarás las siguientes categorias 
      </h2>
      <div className="flex flex-wrap justify-around gap-y-2">
        {categories.map((category) => (
          <div
            key={category.id}
            className={'shadow-2xl flex flex-col items-center justify-center mx-2 lg:w-1/12 rounded-lg py-1 cursor-pointer text-primaryColor'}
          >
            <img
              src={getImageByCategory(category)}
              alt={category.name}
              className="w-[90%] h-auto object-cover "
            />
            <p className="mt-2 text-sm font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </Link>
  );
};


export default AnimalCategoryHome