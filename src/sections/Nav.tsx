import NavOption from "@/components/NavOption";
import poster from '@/assets/poster.webp';
import vader from '@/assets/figura-vader.webp';

export default function Nav(){
    return(
        <section className="grow h-full flex flex-wrap p-[20px_100px] gap-[60px]">
            <NavOption text="Peliculas" src={poster.src} alt="Imagen para la opción de peliculas" />
            <NavOption text="Personajes" src={vader.src} alt="Imagen para la opción de personajes" />
        </section>
    );
}