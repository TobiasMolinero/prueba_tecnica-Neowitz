import Nav from "./Nav";


export default function HeroSection() {
  return (
    <section className="bg-[url('/images/bg-space.webp')] h-[100vh] bg-cover flex flex-col gap-y-[10px]">
        <div className="flex flex-col">
            <h1 className="text-starwars-yellow text-[80px] font-[starjedi] text-center drop-shadow-[0_0_1px_#ffd700]">STAR WARS</h1>
            <h2 className="text-white text-[20px] font-[exo2] text-center drop-shadow-[0_0_1px_#000]">Wiki by Tobias Molinero</h2>
        </div>
        <Nav />
    </section>
  );
}

