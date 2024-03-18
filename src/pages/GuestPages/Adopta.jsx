import React from "react";
import NavbarUser from "../../components/navbars/NavbarGuest";
import AnimalCard from "../../components/cards/AnimalCard";
import FilterColumn from "../../components/filter/FilterColumn";
import AnimalCategoryCard from "../../components/cards/AnimalCategoryCard";

const Adopta = () => {
  return (
    <>
      <div className="mt-[120px] lg:mt-[100px] flex flex-col gap-2">
        <NavbarUser></NavbarUser>
        <div className="w-[70%] m-auto">
          <AnimalCategoryCard></AnimalCategoryCard>
        </div>
        <div className="flex flex-col justify-around items-center my-8">
           <FilterColumn/>
          <div className=" flex flex-wrap  gap-x-10 gap-y-8 lg:gap-x-24 lg:w-[70%] justify-around">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Adopta;
