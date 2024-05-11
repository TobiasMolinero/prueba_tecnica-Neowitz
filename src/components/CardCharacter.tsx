import Image from 'next/image';
import Link from 'next/link';
import iconCharacter from '@/assets/stormtrooper.svg';

interface CharacterProps {
    id: string
}

export default async function CardFilm({ id }: CharacterProps){

    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const data = await response.json();

    return(
        <div className="h-[300px] w-[320px] bg-[#1c1c1c67] rounded-lg  flex flex-col items-center justify-center gap-[20px] cursor-pointer group hover:shadow-[0_0_10px_#ffd700] hover:border hover:border-[#ffd90085] transition-shadow">
            <Link href="/">
                <div className='drop-shadow-[2px_2px_2px_#000] flex justify-center group-hover:scale-[1.1] transition'>
                    <Image src={iconCharacter.src} alt="Icono generico de personaje" width={160} height={160}/>
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <h3 className="font-[exo2] text-[24px] text-white drop-shadow-[0_0_2px_#000] group-hover:scale-[1.1] transition duration-[0.4s]">Personaje</h3>
                    <p className='font-[exo2] text-[20px] text-[#00BFFF] drop-shadow-[0_0_1px_#00BFFF] group-hover:scale-[1.1] transition duration-[0.4s]'
                    >{data.name}</p>
                </div>
            </Link>
        </div>
    );
}