import CardFilm from "@/components/CardFilm";
import CardSkeleton from "@/components/CardSkeleton";
import { Suspense } from "react";

export default async function Characters(){

    const response = await fetch('https://swapi.dev/api/films');
    let data = await response.json();
    
    return(
        <div className="flex flex-col">
            <div className="py-[40px] flex justify-center flex-wrap gap-[30px]">
                <Suspense fallback={
                    <div className="flex justify-center flex-wrap gap-[30px]">
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                    </div>
                }>
                    {data.results.map((film: any) => (
                        <div key={film.episode_id}>
                            <div>
                                <CardFilm numberEpisode={film.episode_id} title={film.title} />
                            </div>
                        </div>
                    ))}
                </Suspense>
            </div>
        </div>
    );
}