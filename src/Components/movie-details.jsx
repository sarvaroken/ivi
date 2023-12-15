import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import playLogo from "../img/play-button.png";
import saveLogo from "../img/save-instagram.png";
import bellLogo from "../img/bell.png";
import shareLogo from "../img/share.png";

export default function MovieDetails() {
  const params = useParams();
  const [data, setData] = useState([]);
  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=2972f35dd42862074eeff5587f083678&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.results[0]);
        console.log(data.results[0]);
      });
  };


  console.log(data);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-[1903px] h-[950px] bg-[#100e19] flex">
      <div className="w-[1240px] h-[556px] grid ">
        <div className="w-[775px] m-auto h-[556px]">
          <iframe
            className="w-[743px] h-[404px] border"
            allow="autoplay"
            src={`https://www.youtube.com/embed/${data.key}?autoplay=1`}
          ></iframe>
          <div className="w-[743px] h-[25px]"></div>
          <div className="w-[719px] h-[40px] ">
            <div className="flex w-[293px] flex-nowrap gap-[10px] h-[40px]">
              <button className=" cursor-pointer w-[109px] flex items-center p-[15px] gap-[3px] h-[40px] bg-[#1f1b2e] rounded">
                <img src={playLogo} alt="" />
                <p className="text-[15px] text-white font-medium not-italic leading-5">
                  Трейлер
                </p>
              </button>
              <button className="rounded cursor-pointer w-[40px] p-[11px] h-[40px] bg-[#1f1b2e]">
                <img src={saveLogo} alt="" />
              </button>
              <button className="rounded cursor-pointer w-[40px] p-[11px] h-[40px] bg-[#1f1b2e]">
                <img src={bellLogo} alt="" />
              </button>
              <button className="rounded cursor-pointer w-[40px] p-[11px] h-[40px] bg-[#1f1b2e]">
                <img src={shareLogo} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col">
        <div className="w-[465px]  h-[210px] ">
          <div className="w-[465px] h-[88px]">
            <h1 className="text-[42px] text-[#fff] not-italic font-bold text-center leading-[56px]">
              {data.name}
            </h1>
          </div>
        </div>
        <div className="w-[465px] gap-[5px] mt-12  h-[70px]">
          <div className="w-[456px] h-5"></div>
          <ul className="m-auto  text-center  list-none truncate text-slate-600 ">
            <div className="inline-block  text-[15px] not-italic font-normal leading-5 align-bottom">
              <a
                href="https://www.ivi.ru/series/2023"
                className="cursor-pointer inline opacity-[1] no-underline transition"
              >
                {data.published_at}
              </a>
            </div>
            <div className="inline-block text-[15px] not-italic font-normal leading-5 align-bottom">
              <a
                href="https://www.ivi.ru/series/2023"
                className="cursor-pointer inline opacity-[1] no-underline transition"
              >
                2 сезона
              </a>
            </div>
            <div className="inline-block text-[15px] not-italic font-normal leading-5 align-bottom">
              <a
                href="https://www.ivi.ru/series/2023"
                className="cursor-pointer inline opacity-[1] no-underline transition"
              >
                16+
              </a>
            </div>
          </ul>
          <ul className="m-auto  text-center  list-none truncate text-slate-600 ">
            <div className="inline-block  text-[15px] not-italic font-normal leading-5 align-bottom">
              <a
                href="https://www.ivi.ru/series/2023"
                className="cursor-pointer inline opacity-[1] no-underline transition"
              >
                {data.published_at}
              </a>
            </div>
            <div className="inline-block text-[15px] not-italic font-normal leading-5 align-bottom">
              <a
                href="https://www.ivi.ru/series/2023"
                className="cursor-pointer inline opacity-[1] no-underline transition"
              >
                2 сезона
              </a>
            </div>
            <div className="inline-block text-[15px] not-italic font-normal leading-5 align-bottom">
              <a
                href="https://www.ivi.ru/series/2023"
                className="cursor-pointer inline opacity-[1] no-underline transition"
              >
                16+
              </a>
            </div>
          </ul>
          <ul className="m-auto  text-center  list-none truncate text-slate-600 ">
            <div className="inline-block  text-[15px] not-italic font-normal leading-5 align-bottom">
              <a
                href="https://www.ivi.ru/series/2023"
                className="cursor-pointer inline opacity-[1] no-underline transition"
              >
                {data.published_at}
              </a>
            </div>
            <div className="inline-block text-[15px] not-italic font-normal leading-5 align-bottom">
              <a
                href="https://www.ivi.ru/series/2023"
                className="cursor-pointer inline opacity-[1] no-underline transition"
              >
                2 сезона
              </a>
            </div>
            <div className="inline-block text-[15px] not-italic font-normal leading-5 align-bottom">
              <a
                href="https://www.ivi.ru/series/2023"
                className="cursor-pointer inline opacity-[1] no-underline transition"
              >
                16+
              </a>
            </div>
          </ul>
        </div>

        <div className=" mt-10 flex justify-between items-center px-1">
          <div className="w-[85px] flex-col h-[96px] justify-center flex items-center">
            <div className="w-[56px] h-[56px] flex justify-center  bg-[hsla(0,0%,100%,.08)] items-center rounded-xl">
              <div className="w-[44px] h-[44px] rounded-lg  flex items-center justify-center bg-[#73a32f]">
                <p className=" text-[15px] not-italic font-medium text-center leading-5 truncate text-[#fff]">8.3</p>
              </div>
            </div>
            <div className="w-[85px] h-[46px] text-center text-slate-600">Рейтинг</div>

          </div>
          <div className="w-[85px] flex-col justify-center flex items-center h-[96px]">
            <div className="w-[56px] h-[56px] flex justify-center  bg-[hsla(0,0%,100%,.08)] items-center rounded-xl">
              <div className="w-[44px] h-[44px] rounded-lg   flex items-center justify-center bg-[#73a32f]">
                <img className="rounded-lg" src="https://thumbs.dfs.ivi.ru/storage28/contents/c/6/e81179c7649ef31aae1d18cfbb0210.jpeg/44x44/?q=85" alt="" />
              </div>
            </div>
            <div className="w-[85px] h-[46px] text-center text-slate-600">Владимир</div>
          </div>
          <div className="w-[85px] flex-col justify-center flex items-center h-[96px]">
            <div className="w-[56px] h-[56px] flex justify-center  bg-[hsla(0,0%,100%,.08)] items-center rounded-xl">
              <div className="w-[44px] h-[44px] rounded-lg  flex items-center justify-center bg-[#73a32f]">
                <img className="rounded-lg" src="https://thumbs.dfs.ivi.ru/storage2/contents/5/5/59723569a3ca8a673981a06f381bff.jpg/44x44/?q=85" alt="" />
              </div>
            </div>
            <div className="w-[85px] h-[46px] text-center text-slate-600">Мерьем</div>
          </div>
          <div className="w-[85px] flex-col justify-center flex items-center h-[96px] ">
            <div className="w-[56px] h-[56px] flex justify-center  bg-[hsla(0,0%,100%,.08)] items-center rounded-xl">
              <div className="w-[44px] h-[44px] rounded-lg  flex items-center justify-center bg-[#73a32f]">
                <img className="rounded-lg" src="https://thumbs.dfs.ivi.ru/storage5/contents/6/6/63781b24e2889e786b0b28e71df449.jpg/44x44/?q=85" alt="" />
              </div>
            </div>
            <div className="w-[85px] h-[46px] text-center text-slate-600">Селен</div>
          </div>
          <div className="w-[85px] flex-col justify-center flex items-center h-[96px] ">
            <div className="w-[56px] h-[56px] flex justify-center  bg-[hsla(0,0%,100%,.08)] items-center rounded-xl">
              <div className="w-[44px] h-[44px] rounded-lg  flex items-center justify-center bg-[#73a32f]">
                <img className="rounded-lg" src="https://thumbs.dfs.ivi.ru/storage6/contents/0/4/4ddcc93a901caa815a39a882acd551.jpg/44x44/?q=85" alt="" />
              </div>
            </div>
            <div className="w-[85px] h-[46px] text-center text-slate-600">Нур</div>
          </div>

        </div>
        <div className="w-[441px] h-[105px] mt-4 text-white truncate line-clamp-6 ">
          <p className="text-inherit m-[2px]">История о живой кукле по имени Пиноккио, которую вырезал из дерева добрый старик Джепетто. Непослушный деревянный мальчик переживает опасные приключения и мечтает стать человеком.</p>
          <p className="text-inherit m-[2px]">Новый взгляд на классическую итальянскую сказку от режиссера Маттео Гарроне. Роль Джепетто исполнил обладатель премии Оскар, легендарный актер Роберто Бениньи, а Пиноккио сыграл молодой актер Федерико Иелапи. Сюжет фильма очень близок к оригинальному тексту произведения, поэтому знаком многим зрителям.</p>
          <p className="text-inherit m-[2px]">Джепетто – нищий резчик по дереву, который едва сводит концы с концами, но не теряет оптимизм. Однажды ему в руки попадает волшебное полено, из которого он делает куклу-мальчика. Неожиданно Пиноккио оживает, а когда папа-плотник доделывает ему ноги, то герой быстро сбегает. Неопытный мальчик попадает в удивительные приключения, которые приближают его к главной цели – стать настоящим человеком.</p>
          <p className="text-inherit m-[2px]">Если вы хотите увидеть новую версию всеми любимой сказки Карло Коллоди, посмотрите фильм «Пиноккио» в нашем онлайн-кинотеатре.</p>
          <p className="text-inherit m-[2px]">Приглашаем посмотреть фильм «Пиноккио» в нашем онлайн-кинотеатре совершенно бесплатно в хорошем HD качестве. Приятного просмотра!</p>
        </div>
        <p className="mt-4 w-[124px] h-[18px] text-slate-600">Детали</p>
        <div className="w-[441px] mt-4 h-[84px]  flex justify-between p-3 cursor-pointer items-center rounded-xl bg-[hsla(0,0%,100%,.08)]">
          <div className="w-[64px] h-[64px] bg-[#73a32f] items-center justify-center rounded-lg flex">
            <div className="text-2xl not-italic font-bold h-[28px] text-white  leading-7 truncate">8.3</div>
          </div>
          <div className="w-[142px] h-[60px] ml-4">
            <div className="text-sm not-italic leading-5 text-white font-medium">Рейтинг Иви</div>
            <div className="text-[hsla(0,0%,100%,.72)] font-normal mt-0 text-sm not-italic leading-5">Интересный сюжет</div>
            <div className="text-[hsla(0,0%,100%,.72)] text-xs not-italic font-normal leading-4 mt-1">4 006 оценок</div>
          </div>
          <button className="border right-4 w-[72px] rounded-md h-[24px] ">
            <div className="text-xs not-italic font-medium leading-4 text-white ">Оценить</div>
          </button>
        </div>
      </div>
      </div>  
  )
}