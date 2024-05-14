import Link from "next/link";

export default function Header(){
    return(
        <header className="flex justify-center items-center py-[20px]">
            <nav className="flex gap-x-[20px]">
                <Link href='/movies' className="drop-shadow-[2px_2px_2px_#000] font-[exo2] text-[24px] text-starwars-yellow">Peliculas</Link>
                <Link href='/characters' className="drop-shadow-[2px_2px_2px_#000] font-[exo2] text-[24px] text-starwars-yellow">Personajes</Link>
            </nav>
        </header>
    );
}