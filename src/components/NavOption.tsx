'use client'

import Image from "next/image";
import Link from "next/link";

interface NavOptionProps {
    text: string
    src: string
    alt: string
}

export default function NavOption({text, src, alt}: NavOptionProps){

    return(
        <div className="grow h-[400px] lg:w-[40%] flex flex-col justify-center items-center bg-[#1c1c1c67] border border-[#ffd90085] rounded-[15px] sm:w-full md:w-full">
            <div className="relative grow flex flex-col items-center justify-center cursor-pointer group">
                <Link href={text === 'Personajes' ? '/characters' : '/movies'}>
                    <div className="drop-shadow-[2px_2px_6px_#000] h-[270px] group-hover:scale-[1.05] transition-transform duration-[0.3s]">
                        <Image src={src} alt={alt} height={270} width={200} />
                    </div>
                    <h3 className="absolute 
                                   bottom-[40px] 
                                   font-[exo2] 
                                   font-[500] 
                                   text-white 
                                   text-[50px] drop-shadow-[0_0_2px_#000] group-hover:drop-shadow-[0_0_2px_#ffd700] group-hover:text-[#ffd700] group-hover:scale-[1.2] transition duration-[0.5s]">{text}</h3>
                </Link>
            </div>
        </div>
    );
}