import { Suspense } from "react";
import CardSkeleton from "@/components/CardSkeleton";
import CardCharacter from '@/components/CardCharacter';
import PaginationMenu from "@/components/PaginationMenu";

export default async function Characters(){

    let page: number = 1;

    const response = await fetch('https://swapi.dev/api/people/?page=1');
    const data = await response.json();

    return(
        <div className="flex flex-col">
            <PaginationMenu />
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
                
                {data.results.map((character: any) => (
                    <div key={character}>
                        <div>
                            <CardCharacter id="" dataCharacter={character} />
                        </div>
                    </div>
                ))}
                </Suspense>
            </div>
        </div>
    );
}