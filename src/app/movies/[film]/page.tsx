

export default async function MovieDetails( { 
    params 
} : {
    params: { film: string };
}){

    const response = await fetch(`https://swapi.dev/api/films/?search=${params.film}`)
    const data = await response.json();
    console.log(data)

    return(
        <div className="bg-red-400 mt-[100px]">
            {/* SECCION DETALLE PELICULA */}
            <section className="">
                <div>
                    <Image src={}></Image>
                </div>
                <h2 className="font-[exo2] text-[40px] text-white text-center">Episodio {data.results[0].episode_id}</h2>
                <h2 className="font-[exo2] font-[700] text-[60px] text-starwars-yellow text-center">{`"${data.results[0].title}"`}</h2>
            </section>
        </div>
    );
}