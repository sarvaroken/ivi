import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Details = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=2972f35dd42862074eeff5587f083678"
  )
    .then((res) => res.json())
    .then((data) => setData(data.results));

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className="w-full bg-[#100e19] ">
      <div className=" grid grid-cols-6  w-[60%] m-auto">
        {data.map((item, index) => (
          <div className="m-auto" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              onClick={() => navigate(`/details/${item.id}`)}
              className="w-[153px] h-[235px] rounded-[5px] shadow-2xl mt-5 mb-5 cursor-pointer"
            />
            <h1 className="text-[#d9d7e0] line-clamp-3">
              {item.original_title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};
