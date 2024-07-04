import React from 'react';
import patternDivider from "../assets/pattern-divider-desktop.svg"
import dice from "../assets/icon-dice.svg"

const Advice = () => {
    return (
        <div className='h-screen w-full bg-[#1f2632] flex justify-center items-center'>
            <div className='bg-[#323a49] h-fit px-12 pt-12 pb-20 w-[40%] rounded-2xl flex flex-col items-center text-center relative'>
                <p className='text-[#52ffa8] text-[14px] font-semibold tracking-[5px]'>
                    ADVICE ID # 177
                </p>

                <h3 className='mt-4 text-[28px] font-bold text-[#CEE3E9]'>
                    “Everyone has their down days. Don't take it out on innocent bystanders.”
                </h3>

                <img className='mt-8' src={patternDivider} alt="" />

                <div className='bg-[#52ffa8] p-5 rounded-full absolute -bottom-8 cursor-pointer hover:shadow-[0_0_25px_5px_rgba(82,255,168,0.75)] shadow-[#52ffa8] transition-shadow duration-300 ease-in-out'>
                    <img className='w-[24px]' src={dice} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Advice;