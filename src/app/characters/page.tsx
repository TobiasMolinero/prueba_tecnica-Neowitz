import Link from "next/link";
import { Suspense } from "react";
import CardSkeleton from "@/components/CardSkeleton";
import CardCharacter from '@/components/CardCharacter';
import { getCharacters } from "@/utils/helpers";
import type { Characters } from "@/utils/interfaces";

export default async function Characters({
    searchParams
}: {
    searchParams: {[key: string]: string | string[] | undefined}
}){

    let page = Number(searchParams.page) || 1;

    const characters = await getCharacters(page);

    return(
        <div className="flex flex-col">
            <div className="sticky py-[10px] bg-[#1c1c1c67] mt-[40px] flex justify-center items-center gap-x-[20px] border-y border-starwars-yellow">
                <Link href={`/characters?page=${page > 1 ? page - 1 : 9}`} className="bg-starwars-yellow p-[5px_20px] font-[exo2] font-[500] rounded-[10px] hover:scale-[1.05] active:scale-[1] active:bg-[#caad05] transition-transform">Prev</Link>
                <Link href={`/characters?page=${page === 9 ? 1 : page + 1}`} className="bg-starwars-yellow p-[5px_20px] font-[exo2] font-[500] rounded-[10px] hover:scale-[1.05] active:scale-[1] active:bg-[#caad05] transition-transform">Next</Link>
            </div>
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
                
                {characters.map((character: Characters) => (
                    <div key={character.name}>
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