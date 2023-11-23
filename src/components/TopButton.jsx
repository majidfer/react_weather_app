import React from "react";
import Logo from "../assets/Logo-Aksamaia.png";

function TopButton({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Bandung",
    },
    {
      id: 2,
      title: "Jakarta",
    },
    {
      id: 3,
      title: "Surabaya",
    },
    {
      id: 4,
      title: "Makassar",
    },
    {
      id: 5,
      title: "Aceh",
    },
  ];
  return (
    <>
      <div className="flex justify-center">
        <a href="http://aksamaia.co.id">
          <img className="w-64 h-auto" src={Logo} alt="" />
        </a>
      </div>
      <div className="flex justify-around my-6">
        <h1 className="text-2xl font-medium text-white">
          Aksamaia Weather App
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-around my-6">
        {cities.map((city) => (
          <button
            key={city.id}
            className="text-white text-lg font-medium m-2"
            onClick={() => setQuery({ q: city.title })}
          >
            {city.title}
          </button>
        ))}
      </div>
    </>
  );
}

export default TopButton;
