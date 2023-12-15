import React from "react";

export const Premium = () => {
    return (
        <section className="w-[1903px] h-[72px] bg-[#100e19]">
            <div className="w-[1240px] m-auto flex justify-center items-center">
                <div className="w-[546px] rounded-md gap-2 h-[48px] bg-[#1f1b2e] m-auto">
                        <button className="w-[248px] h-[32px]  flex justify-center items-center p-6"> <img src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/lightning.svg" alt="" /><p className="text-white text-sm not-italic font-medium h-5 leading-5 mt-[-20px] pb-5 pt-5 text-center truncate">30 дней подписки бесплатно</p></button>
                </div>
                <div className="w-[546px] rounded-md h-[48px] bg-[#1f1b2e] m-auto"> <button className="w-[248px] h-[32px]  flex justify-center items-center p-6"> <img src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/gift.svg" alt="" /><p className="text-white text-sm not-italic font-medium h-5 leading-5 mt-[-20px] pb-5 pt-5 text-center truncate">Активация сертификата</p></button></div>
            </div>
        </section>
    )
}