import Image from 'next/image'
import Link from 'next/link';
import iconoFilm from '@/assets/icono-film.svg';

interface FilmCardProps{
    title: string
    numberEpisode: number
}

export default function CardFilm({title, numberEpisode}: FilmCardProps){
    return(
        <div className="h-[300px] w-[320px] bg-[#1c1c1c67] rounded-lg cursor-pointer group hover:shadow-[0_0_10px_#ffd700] hover:border hover:border-[#ffd90085] transition-shadow">
            <Link href={`/movies/${title}`} className='w-full h-full flex flex-col items-center justify-center gap-[20px]'>            
                <div className='drop-shadow-[2px_2px_2px_#000] flex justify-center group-hover:scale-[1.1] transition'>
                    <Image src={iconoFilm.src} alt="Icono generico de film" width={150} height={150}/>
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <h3 className="font-[exo2] text-[24px] text-white drop-shadow-[0_0_2px_#000] group-hover:scale-[1.1] transition duration-[0.4s]">Episodio: {numberEpisode}</h3>
                    <p className='font-[exo2] text-[20px] text-[#00BFFF] drop-shadow-[0_0_1px_#00BFFF] group-hover:scale-[1.1] transition duration-[0.4s]'
                    >{`"${title}"`}</p>
                </div>
            </Link>
        </div>
    );
}