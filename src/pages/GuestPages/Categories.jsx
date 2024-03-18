import React from 'react'
import NavbarUser from '../../components/navbars/NavbarGuest'
import AnimalCard from '../../components/cards/AnimalCard'
import ShelterCard from '../../components/cards/ShelterCard'
import ShelterAnimalCard from '../../components/cards/ShelterAnimalCard'
import AnimalPrimaryInfo from '../../components/cards/AnimalPrimaryInfo'
import AnimalSecondaryInfo from '../../components/cards/AnimalSecondaryInfo'
import FilterColumn from '../../components/filter/FilterColumn'
import AnimalCategoryCard from '../../components/cards/AnimalCategoryCard'

const Categories = () => {
  return (
    <>
    <div className="mt-[100px] flex flex-col gap-4">
    <NavbarUser></NavbarUser>
    <div className='w-[70%] m-auto'>
    <AnimalCategoryCard></AnimalCategoryCard>
    <FilterColumn></FilterColumn>
    </div>
    <div className=' flex flex-wrap m-auto gap-x-10 gap-y-8 lg:gap-x-24 lg:w-[70%] justify-around'>
    <AnimalCard/>
    <AnimalCard/>
    <AnimalCard/>
    <AnimalCard/>
    <AnimalCard/>
    <AnimalCard/>
    </div>
    </div>
    
    </>
  )
}

export default Categories