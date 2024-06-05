import Image from 'next/image';
import iconCharacter from '@/assets/stormtrooper.svg';
import EyesColor from '@/components/EyesColor';

export default async function CharacterDetails({ params } : { params: {character: string}}){

    const response = await fetch(`https://swapi.dev/api/people?search=${params.character}`);
    const data = await response.json();
    
    const eye_color = data.results[0].eye_color; 
    const birth_year = data.results[0].birth_year; 
    const hair_color = data.results[0].hair_color; 
    const height = data.results[0].height; 
    const skin_color = data.results[0].skin_color; 
    const mass = data.results[0].mass; 

    return (
        <div className="mt-[60px]">
            {/* SECCION DETALLE PERSONAJE*/}
            <section className="flex gap-[50px] flex-wrap md:mx-[100px] lg:mx-[100px] xl:mx-[100px]">
                <div className='grow drop-shadow-[2px_2px_2px_#000] flex justify-center'>
                    <Image src={iconCharacter} alt="imagen generica para peliculas" width={300} height={300} />
                </div>
                <div className='grow items-start justify-center sm:block md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-col 2xl:flex 2xl:flex-col'>
                    <h2 className="drop-shadow-[2px_2px_2px_#000] font-[exo2] font-[700] text-[60px] text-starwars-yellow text-center">{data.results[0].name}</h2>
                    {eye_color === 'unknown' || eye_color === 'n/a' ? '' : 
                        <h4 className='drop-shadow-[2px_2px_2px_#000] font-[exo2] text-[20px] text-white text-center flex justify-center items-center gap-[10px]'>
                            Color de ojos: 
                            <EyesColor colors={data.results[0].eye_color}/>
                        </h4>   
                    }

                    {birth_year === 'unknown' || birth_year === 'n/a' ? '' : <h4 className='drop-shadow-[2px_2px_2px_#000] font-[exo2] text-[20px] text-white text-center'>Año de nacimiento: <span className="text-starwars-yellow">{data.results[0].birth_year}</span></h4>}
                    
                    {hair_color === 'unknown' || hair_color === 'n/a' ? '' : <h4 className='drop-shadow-[2px_2px_2px_#000] font-[exo2] text-[20px] text-white text-center'>Color del pelo: <span className="text-starwars-yellow">{data.results[0].hair_color}</span></h4>}
                    
                    {height === 'unknown' ||height === 'n/a' ? '' : <h4 className='drop-shadow-[2px_2px_2px_#000] font-[exo2] text-[20px] text-white text-center'>Altura: <span className="text-starwars-yellow">{data.results[0].height} cm</span></h4>}
                    
                    {skin_color === 'unknown' || skin_color === 'n/a' ? '' : <h4 className='drop-shadow-[2px_2px_2px_#000] font-[exo2] text-[20px] text-white text-center'>Color de piel: <span className="text-starwars-yellow">{data.results[0].skin_color}</span></h4>}
                    
                    {mass === 'unknown' || mass === 'n/a' ? '' : <h4 className='drop-shadow-[2px_2px_2px_#000] font-[exo2] text-[20px] text-white text-center'>Masa: <span className="text-starwars-yellow">{data.results[0].mass} kg</span></h4>}
                </div>
            </section>
        </div>
    );
}