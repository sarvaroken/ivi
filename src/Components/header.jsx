import React from "react";
import searchLogo from "../img/search.png";
import bellLogo from "../img/bell.png";
import userLogo from "../img/user.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-[72px] flex items-center m-auto bg-[#100e19]">
      <div className="w-[1240px] h-[72px] m-auto">
        <div className="flex items-center ">
          <div className="p-[10px]">
            <img className="w-[66px]  h-[48px]"
              src="https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg" alt="" />
          </div>
          <div className="w-[600px] text-stone-500 flex ml-[32px] text-[15px] font-medium not-italic">
            <Link className="w-[77px] " to={"#"}>
              Мой Иви
            </Link>
            <Link className="w-[77px] " to={"#"}>
              Hового
            </Link>
            <Link className="w-[80px] " to={"#"}>
              Фильмы
            </Link>
            <Link className="w-[77px] " to={"#"}>
              Сериалы
            </Link>
            <Link className="w-[77px] " to={"#"}>
              Мультфильмы
            </Link>
          </div>
          <div className="w-[235px] ml-[16px] m-[ 20px]">
            <button className="rounded-[5px] mr-[12px] text-[13px] font-medium not-italic leading-4 text-white bg-[#ea003d] border-[#ea003d] w-[212px] h-[32px]">
              Смотреть 30 дней бесплатно
            </button>
          </div>
          <img className="w-4 h-4" src={searchLogo} alt="" />
          <input className="w-[90px] gap-[3px] flex items-center text-white  bg-[#100e19] rounded" type="text" placeholder="Поиск"/>
          {/* <button className="">
            <img className="" src={searchLogo} alt="" />
            <p className="text-stone-500  text-[15px] font-medium not-italic leading-4">
              Поиск
            </p>
          </button> */}
          <button className="w-[52px]">
            <img src={bellLogo} alt="" />
          </button>
          <div className="w-[107px] flex items-center ">
            <div className="w-[95px] h-[40px]  bg-[#1f1b2e] rounded-md pl-[4px] pr-[12px] p-[9px, 15px]">
              <button className="w-[32px] flex text-[13px] h-[32px] bg-[#312b45] rounded-md p-[8px]">
                <img className="items-center" src={userLogo} alt="" />
                <p className="text-white pl-[15px] font-medium not-italic leading-4">
                  Войти
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
