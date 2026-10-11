import type { ReactNode } from "react";

interface PlantillaPaginaProps {
  titulo: string;
  descripcion?: string;
  children?: ReactNode;
}

export default function PlantillaPagina({
  titulo,
  descripcion,
  children,
}: PlantillaPaginaProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-beige px-6 py-16">
      <div className="w-full max-w-2xl rounded-2xl border-2 border-verde bg-white p-8 text-center shadow-lg sm:p-12">
        <h1 className="text-3xl font-bold text-verde sm:text-4xl">{titulo}</h1>
        {descripcion && (
          <p className="mt-4 text-lg leading-7 text-zinc-700">{descripcion}</p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
}