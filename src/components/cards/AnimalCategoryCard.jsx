import React from 'react';
import Perro from '../../assets/images/Perro.svg';
import Gato from '../../assets/images/Gato.svg';
import Loro from '../../assets/images/Loro.svg';
import Conejo from '../../assets/images/Conejo.svg';
import Otros from '../../assets/images/Otros.svg';
import Huella from '../../assets/images/Huella.svg';

const AnimalCategoryCard = ({ category="Gato" }) => {
  const getImageByCategory = (category) => {
    switch (category) {
      case 'Perro':
        return Perro;
      case 'Gato':
        return Gato;
      case 'Loro':
        return Loro;
      case 'Conejo':
        return Conejo;
      case 'Otros':
        return Otros;
      default:
        return Huella; // Si no hay una imagen específica, puedes devolver una imagen predeterminada o dejarla vacía
    }
  };

  const imageSrc = getImageByCategory(category);

  return (
    <div className='flex flex-wrap justify-around'>
    <div className="bg-white shadow-2xl flex flex-col items-center justify-center mx-2 lg:w-1/12 rounded-lg py-1">
      <img src={Huella} alt="Huella" className="w-[90%] h-auto object-cover" />
      <p className="mt-2 text-sm font-medium">Todos</p>
    </div>
    <div className="bg-white shadow-2xl flex flex-col items-center justify-center mx-2 lg:w-1/12 rounded-lg py-1">
      <img src={imageSrc} alt={category} className="w-[90%] h-auto object-cover" />
      <p className="mt-2 text-sm font-medium">{category}</p>
    </div>
    </div>
  );
};

export default AnimalCategoryCard;
