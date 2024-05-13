import Image from 'next/image';
import Link from 'next/link';
import iconCharacter from '@/assets/stormtrooper.svg';
import iconMale from '@/assets/icon-male.svg';
import iconFemale from '@/assets/icon-female.svg';
import EyesColor from './EyesColor';

interface CharacterProps {
    id: string
    dataCharacter: string[]
}

export default async function CardCharacterFilm({ id, dataCharacter }: CharacterProps){

    let data;

    if(id !== ''){
        const response = await fetch(`https://swapi.dev/api/people/${id}`);
        data = await response.json();
    } else {
        data = dataCharacter;
    }

    return(
        <div className="h-[300px] w-[320px] bg-[#1c1c1c67] rounded-lg cursor-pointer group hover:shadow-[0_0_10px_#ffd700] hover:border hover:border-[#ffd90085] transition-shadow">
            <Link href="/" className="h-full w-full flex flex-col items-center justify-center gap-[10px]">
                <div className='drop-shadow-[2px_2px_2px_#000] flex justify-center group-hover:scale-[1.1] transition'>
                    <Image src={iconCharacter.src} alt="Icono generico de personaje" width={160} height={160}/>
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <h3 className="font-[exo2] text-[24px] text-starwars-yellow drop-shadow-[2px_2px_2px_#000] group-hover:scale-[1.1] transition duration-[0.4s]">{data.name}</h3>
                    {id === '' ? 
                        <div>
                            <p className="drop-shadow-[2px_2px_2px_#000] font-[exo2] text-[20px] text-white flex justify-start items-center gap-x-[15px]">
                                Color de ojos: 
                                <EyesColor colors={data.eye_color} />
                                {/* <span className={`
                                    flex justify-center items-center
                                    w-[22px] h-[22px] 
                                    ${data.eye_color === 'unknown' ? '' : 'border border-white shadow-[2px_2px_2px_#000]'} 
                                    bg-[${data.eye_color === 'hazel' ? '#b08d57' : data.eye_color}]`}>
                                        {data.eye_color === 'unknown' ? 'N/D' : ''}
                                </span> */}
                            </p>
                            <p className='drop-shadow-[2px_2px_2px_#000] font-[exo2] text-[20px] text-white flex justify-start items-center gap-x-[10px]'>
                                Genero: 
                                <Image 
                                    src={data.gender === 'male' ? iconMale.src : iconFemale.src} 
                                    alt={`Icono representativo del genero ${data.gender === 'male' ? 'masculino' : 'femenino'}`} 
                                    width={24}
                                    height={24}
                                />
                            </p>
                        </div>
                    : ''}
                </div>
            </Link>
        </div>
    );
}