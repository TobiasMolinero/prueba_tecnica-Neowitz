'use client'

import Image from "next/image";

interface Props {
    text: string
    src: string
    alt: string
}

export default function NavOption({text, src, alt}: Props){

    return(
        <div className="grow flex flex-col justify-center items-center bg-[#1c1c1c67] border border-[#ffd90085] rounded-[15px]">
            <div className="relative grow flex flex-col items-center justify-center cursor-pointer group">
                <div className="drop-shadow-[2px_2px_6px_#000] h-[270px] group-hover:scale-[1.05] transition-transform duration-[0.3s]">
                    <Image src={src} alt={alt} height={270} width={200} layout='fixed'/>
                </div>
                <h3 className="absolute bottom-[40px] font-[exo2] font-[500] text-white text-[50px] drop-shadow-[0_0_2px_#000] group-hover:drop-shadow-[0_0_2px_#ffd700] group-hover:text-[#ffd700] group-hover:scale-[1.2] transition duration-[0.5s]">{text}</h3>
            </div>
        </div>
    );
}