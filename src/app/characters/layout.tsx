import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Personajes - Star Wars Wiki",
  description: "Un listado de los personajes mas relevantes de las 6 primeras peliculas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        <h1 className="text-[60px] text-starwars-yellow font-[starjedi] text-center drop-shadow-[0_0_1px_#ffd700]">Personajes</h1>
        {children}
      </body>
    </html>
  );
}
