import React from "react";
import mailLogo from "../img/mail.png";
import callLogo from "../img/phone-call.png";
import annLogo from "../img/no-adss.png";
import appleLogo from "../img/apple-logo.png";
import googlePlay from "../img/google-play.png";
import monitorLogo from "../img/monitor.png";
import responsiveLogo from "../img/responsive.png";
import vkontakteLogo from "../img/vk-logo-of-social-network.png";
import classmatesLogo from "../img/odnoklassniki.png";
import twitterxLogo from "../img/twitter.png";
import socialviberLogo from "../img/viber.png";
import linkedinLogo from "../img/linkedin.png";
import telegramLogo from "../img/telegram.png";
export const Footer = () => {
  return (
    <div className="w-full h-596px bg-[#100e19]">
      <div className="w-[1216px] h-[596px] ml-auto mr-auto">
        <div className="w-[1240px] h-[388px] pb-[48px] pt-[48px] flex">
          <div className="w-[310px] h-[292px] pl-[12px] pr-[12px] box-border">
            {/* <div className='w-[1216px] bg-slate-500 h-[2px] '></div> */}
            <span className="text-[15px] font-bold text-white not-italic leading-5 mb-[8px] block">
              О нас
            </span>
            \
            <ul className="grid gap-y-[8px] list-none">
              <li className="text-[15px] not-italic leading-5 text-[#a5a1b2] font-normal">
                <a href="https://corp.ivi.ru/">О компании</a>
              </li>
              <li className="text-[15px] not-italic leading-5 text-[#a5a1b2] font-normal">
                <a href="https://corp.ivi.ru/">Вакансии</a>
              </li>
              <li className="text-[15px] not-italic leading-5 text-[#a5a1b2] font-normal">
                <a href="https://corp.ivi.ru/">Программа бета-тестирования</a>
              </li>
              <li className="text-[15px] not-italic leading-5 text-[#a5a1b2] font-normal">
                <a href="https://corp.ivi.ru/">Информация для партнёров</a>
              </li>
              <li className="text-[15px] not-italic leading-5 text-[#a5a1b2] font-normal">
                <a href="https://corp.ivi.ru/">Размещение рекламы</a>
              </li>
              <li className="text-[15px] not-italic leading-5 text-[#a5a1b2] font-normal">
                <a href="https://corp.ivi.ru/">Пользовательское соглашение</a>
              </li>
              <li className="text-[15px] not-italic leading-5 text-[#a5a1b2] font-normal">
                <a href="https://corp.ivi.ru/">Политика конфиденциальности</a>
              </li>
              <li className="text-[15px] not-italic leading-5 text-[#a5a1b2] font-normal">
                <a href="https://corp.ivi.ru/">
                  На Иви применяются рекомендательные технологии
                </a>
              </li>
              <li className="text-[15px] not-italic leading-5 text-[#a5a1b2] font-normal">
                <a href="https://corp.ivi.ru/">Комплаенс</a>
              </li>
            </ul>
          </div>
          <div className="w-[310px] h-[292px] pl-[12px] pr-[12px] box-border">
            <span className="text-[15px] font-bold text-white not-italic leading-5 mb-[8px] block">
              Разделы
            </span>
            \
            <ul className="grid gap-y-[8px] list-none">
              <li className="text-[15px] not-italic leading-5 text-[#a5a1b2] font-normal">
                <a href="https://corp.ivi.ru/">Мой Иви</a>
              </li>
              <li className="text-[15px] not-italic leading-5 text-[#a5a1b2] font-normal">
                <a href="https://corp.ivi.ru/">Что нового</a>
              </li>
              <li className="text-[15px] not-italic leading-5 text-[#a5a1b2] font-normal">
                <a href="https://corp.ivi.ru/">Фильмы</a>
              </li>
              <li className="text-[15px] not-italic leading-5 text-[#a5a1b2] font-normal">
                <a href="https://corp.ivi.ru/">Сериалы</a>
              </li>
              <li className="text-[15px] not-italic leading-5 text-[#a5a1b2] font-normal">
                <a href="https://corp.ivi.ru/">Мультфильмы</a>
              </li>
              <li className="text-[15px] not-italic leading-5 text-[#a5a1b2] font-normal">
                <a href="https://corp.ivi.ru/">Что посмотреть</a>
              </li>
              <li className="text-[20px] not-italic leading-5 bg-gradient-to-l from-[#c447ff] to-[#ea003d] bg-clip-text font-normal">
                <a href="https://corp.ivi.ru/">Активация сертификата</a>
              </li>
            </ul>
          </div>
          <div className="w-[310px] h-[292px] pl-[12px] pr-[12px] box-border">
            <span className="text-[15px] font-bold text-white not-italic leading-5 mb-[8px] block">
              Служба поддержки
            </span>
            <ul className="grid gap-y-[8px] list-none">
              <li className="text-[15px] not-italic leading-5 text-[#a5a1b2] font-normal">
                <a href="https://corp.ivi.ru/">
                  Мы всегда готовы вам помочь. Наши операторы онлайн 24/7
                </a>
              </li>
              <button className="w-[196px] h-[40px] bg-[#1f1b2e] rounded-md">
                <span className="text-[15px] font-bold text-white not-italic leading-5 mb-[8px] block">
                  Написать в чате
                </span>
              </button>
              <div className="flex gap-[15px]">
                <button className="w-[40px] h-[40px] bg-[#1f1b2e] p-[8px] rounded-md">
                  <img src={mailLogo} alt="" />
                </button>
                <button className="w-[40px] h-[40px] bg-[#1f1b2e] p-[8px] rounded-md">
                  <img src={callLogo} alt="" />
                </button>
              </div>
              <span className="text-[15px] font-bold text-white not-italic leading-5 mb-[8px] block">
                ask.ivi.ru
              </span>
              <li className="text-[15px] not-italic leading-5  text-[#a5a1b2] font-normal">
                <a href="https://corp.ivi.ru/">Ответы на вопросы</a>
              </li>
            </ul>
          </div>
          <div className="w-[310px] h-[292px] pl-[12px] pr-[12px]  box-border">
            <div className="w-[104px] h-[104px] bg-gradient-to-r from-[#a869f0] to-[#834cc2] m-auto shadow-lg shadow-[#a869f0] rounded-[20px]">
              <img className="m-auto p-[20px]" src={annLogo} alt="" />
            </div>
            <li className="text-[15px] not-italic leading-5 p-[35px] text-center list-none text-[#a5a1b2] font-normal">
              <a href="https://corp.ivi.ru/">
                Смотрите фильмы, сериалы и мультфильмы без рекламы
              </a>
            </li>
          </div>
        </div>
        <div className="w-[1216px] bg-slate-500 h-[2px] "></div>
        <div className="w-[1240px] h-[208px] pb-[48px] pt-[48px] flex">
          <div className="w-[620px] h-[112px] pl-[12px] pr-[12px]">
            <div className="w-[596px] h-40px] flex items-center gap-x-[12px]">
              <button className="bg-[#1f1b2e] list-none rounded-lg cursor-pointer border-0 flex  text-left transition-colors w-[125px] h-[45px]">
                <img className="p-[8px] mr-[12px]" src={appleLogo} alt="" />
                <div className="w-[73px] overflow-hidden h-[38px]">
                  <p className="text-slate-400 text-[10px] not-italic font-medium">
                    Загрузить в
                  </p>
                  <li className="text-white text-[15px] not-italic font-medium ">
                    App Store
                  </li>
                </div>
              </button>
              <button className="bg-[#1f1b2e] list-none rounded-lg cursor-pointer border-0 flex  text-left transition-colors w-[125px] h-[40px]">
                <img className="mr-[12px] p-[8px]" src={googlePlay} alt="" />
                <div>
                  <p className="text-slate-400 text-[10px] not-italic font-medium">
                    Доступно в
                  </p>
                  <li className="text-white text-[15px] not-italic font-medium w-[73px] h-[20px]">
                    {" "}
                    Play
                  </li>
                </div>
              </button>
              <button className="bg-[#1f1b2e] list-none rounded-lg cursor-pointer border-0 flex  text-left transition-colors w-[125px] h-[40px]">
                <img className="mr-[12px] p-[8px]" src={monitorLogo} alt="" />
                <div>
                  <p className="text-slate-400 text-[10px] not-italic font-medium">
                    Смотрите на
                  </p>
                  <li className="text-white text-[15px] not-italic font-medium w-[73px] h-[20px]">
                    Smart TV
                  </li>
                </div>
              </button>
              <button className="bg-[#1f1b2e] list-none rounded-lg cursor-pointer border-0 flex  text-left transition-colors w-[125px] h-[40px]">
                <img
                  className="mr-[12px] p-[4px]"
                  src={responsiveLogo}
                  alt=""
                />
                <div>
                  <li className="text-white text-[15px] not-italic font-medium  w-[73px] h-[20px]">
                    Устройства
                  </li>
                </div>
              </button>
            </div>
            <li className="w-[596px] h-[40px] mt-[32px] text-[15px] not-italic leading-5 list-none  text-[#a5a1b2] font-normal">
              <a href="https://corp.ivi.ru/">
                © 2023 ООО «Иви.ру» HBO ® and related service marks are the
                property of Home Box Office, Inc
              </a>
            </li>
          </div>
          <div className="w-[620px] h-[112px]">
            <div className="w-[596px] h-[40px] gap-x-[12px] grid grid-flow-col justify-end">
              <button className="bg-[#1f1b2e] rounded-[50%] w-[40px] h-[40px] overflow-clip flex justify-center items-center">
                <img src={vkontakteLogo} alt="" />
              </button>
              <button className="bg-[#1f1b2e] rounded-[50%] w-[40px] h-[40px] overflow-clip flex justify-center items-center">
                <img src={classmatesLogo} alt="" />
              </button>
              <button className="bg-[#1f1b2e] rounded-[50%] w-[40px] h-[40px] overflow-clip flex justify-center items-center">
                <img src={twitterxLogo} alt="" />
              </button>
              <button className="bg-[#1f1b2e] rounded-[50%] w-[40px] h-[40px] overflow-clip flex justify-center items-center">
                <img src={socialviberLogo} alt="" />
              </button>
              <button className="bg-[#1f1b2e] rounded-[50%] w-[40px] h-[40px] overflow-clip flex justify-center items-center">
                <img src={linkedinLogo} alt="" />
              </button>
              <button className="bg-[#1f1b2e] rounded-[50%] w-[40px] h-[40px] overflow-clip flex justify-center items-center">
                <img src={telegramLogo} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
