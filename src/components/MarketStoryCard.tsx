"use client";

import Image from "next/image";
import React from "react";

// -----------------------------making custom data type for for using props in typescript(starts)--------------------------------

interface MarketStoryCardProps{
  image:string,
  title:string,
  description:string
}

// -----------------------------making custom data type for for using props in typescript(ends)--------------------------------


const MarketStoryCard :React.FC<MarketStoryCardProps>= ({image, title, description}) => {
  return (
    <div className="flex flex-col m-2 shadow-2xl mt-6 mr-2 rounded-md">


      {/* ---------------------------------------------image part(starts)----------------------------------------------------- */}
      <div className="w-full ">
        <Image
          width={1000}
          height={125}
          src={image} alt="story-image" />
      </div>
      {/* ---------------------------------------------image part(ends)----------------------------------------------------- */}



      {/* ---------------------------------------------title and decription part(starts)----------------------------------------------------- */}
      <div className="m-2 ml-8 mr-8 sm:ml-2 sm:mr-2">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-sm sm:text-xs">{description}</p>
      </div>
      {/* ---------------------------------------------title and decription part(ends)----------------------------------------------------- */}


    </div>
  )
}

export default MarketStoryCard