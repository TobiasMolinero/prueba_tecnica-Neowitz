import type { Metadata } from "next";
import './globals.css'


export const metadata: Metadata = {
  title: "Star Wars Wiki by Tobias Molinero",
  description: "Welcome to my wiki about Star Wars!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
