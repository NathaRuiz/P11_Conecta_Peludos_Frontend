import React from 'react'
import NavbarUser from '../../components/navbars/NavbarGuest'
import AnimalCard from '../../components/cards/AnimalCard'
import ShelterCard from '../../components/cards/ShelterCard'
import ShelterAnimalCard from '../../components/cards/ShelterAnimalCard'
import AnimalPrimaryInfo from '../../components/cards/AnimalPrimaryInfo'
import AnimalSecondaryInfo from '../../components/cards/AnimalSecondaryInfo'

const Categories = () => {
  return (
    <>
    <div className="mt-[100px] flex flex-wrap gap-x-10 gap-y-8 lg:gap-x-24 justify-around lg:w-[70%]">
    <NavbarUser></NavbarUser>
    <AnimalCard/>
    <AnimalCard/>
    <AnimalCard/>
    <AnimalCard/>
    <AnimalCard/>
    <AnimalCard/>
    <ShelterCard></ShelterCard>
    <ShelterAnimalCard></ShelterAnimalCard> 
    <AnimalPrimaryInfo></AnimalPrimaryInfo>
    <AnimalSecondaryInfo></AnimalSecondaryInfo>
    </div>
    
    </>
  )
}

export default Categories