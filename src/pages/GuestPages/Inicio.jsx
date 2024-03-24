import React from 'react'
import { useMediaQuery } from 'react-responsive';
import BannerAdoptaM from '../../assets/images/Banner-Adopta-Mobile.svg';
import BannerAdoptaD from '../../assets/images/Banner-Adopta-Desktop.svg';
import AnimalCategoryHome from '../../components/cards/AnimalCategoryHome';
import InfoAdopt from '../../components/cards/InfoAdopt';
import { Link } from 'react-router-dom';
import StepperAdopt from '../../components/stepper/StepperAdopt';


const Inicio = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="mt-[120px] lg:mt-[100px] flex flex-col gap-2 m-auto">
      <Link to='/aprende'>
          {isMobile ? (
            <img
              src={BannerAdoptaM}
              alt="Banner"
              className="h-auto m-auto"
            />
          ) : (
            <img
              src={BannerAdoptaD}
              alt="Banner"
              className="w-[80%] h-auto m-auto"
            />
          )}
        </Link>
        <div className='w-[70%] m-auto bg-white py-5 rounded-lg hover:shadow-2xl'>
          <AnimalCategoryHome/>
        </div>
        <div>
          <InfoAdopt/>
          <StepperAdopt/>
        </div>
    </div>
  )
}

export default Inicio