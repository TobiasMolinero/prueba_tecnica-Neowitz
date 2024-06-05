import Image from 'next/image';
import dynamic from 'next/dynamic'
import iconoFilm from '@/assets/icono-film.svg';
import { getIdFromUrl } from '@/utils/helpers';

export default async function MovieDetails( { 
    params 
} : {
    params: { film: string };
}){

    const CardCharacter = dynamic(() => import('@/components/CardCharacter'));

    const response = await fetch(`https://swapi.dev/api/films/?search=${params.film}`);
    const data = await response.json();
    const arrayCharacters: string[] = data.results[0].characters;

    const numberCharacters: string[] = arrayCharacters.map(url => getIdFromUrl(url));

    return(
        <div className=" mt-[20px]">
            {/* SECCION DETALLE PELICULA */}
            <section className="flex gap-[50px] flex-wrap md:mx-[100px] lg:mx-[100px] xl:mx-[100px]">
                <div className='grow drop-shadow-[2px_2px_2px_#000] flex justify-center'>
                    <Image src={iconoFilm} alt="imagen generica para peliculas" width={300} height={300} />
                </div>
                <div className='grow items-start justify-center sm:block md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-col 2xl:flex 2xl:flex-col'>
                    <h2 className="drop-shadow-[2px_2px_2px_#000] font-[exo2] text-[40px] text-white text-center">Episodio {data.results[0].episode_id}</h2>
                    <h2 className="drop-shadow-[2px_2px_2px_#000] font-[exo2] font-[700] text-[60px] text-starwars-yellow text-center">{`"${data.results[0].title}"`}</h2>
                    <h4 className='drop-shadow-[2px_2px_2px_#000] font-[exo2] text-[20px] text-white text-center'>Director: <span className="text-starwars-yellow">{`"${data.results[0].director}"`}</span></h4>
                </div>
            </section>
            <section className='mt-[20px] flex flex-col gap-[40px] md:mx-[100px] lg:mx-[100px] xl:mx-[100px]'>
                <h2 className='drop-shadow-[2px_2px_2px_#000] font-[exo2] font-[600] text-[40px] text-starwars-yellow text-center'>Personajes</h2>
                <div className='flex flex-wrap justify-center gap-[30px] mb-[40px]'>
                    {numberCharacters.map(character => (
                        <div key={character}>
                            <CardCharacter id={character} 
                                           dataCharacter={{
                                                name: '',
                                                height: '',
                                                mass: '',
                                                hair_color: '',
                                                skin_color: '',
                                                eye_color: '',
                                                birth_year: '',
                                                gender: '',
                                                homeworld: '',
                                                films: [''],
                                                species: [''],
                                                vehicles: [''],
                                                starships: [''],
                                                created: '',
                                                edited: '',
                                                url: ''
                                           }} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}