import PlantillaPagina from "@/components/PlantillaPagina";

interface Integrante {
  titulo: string;
  descripcion: string;
}

const nosotrosContent : Integrante[] = [
  {titulo: "Samantha Minda",descripcion: "Biologa."},
  {titulo: "Angelica Criollo",descripcion: "Biologa."},
  {titulo: "Juliana Torres",descripcion: "Biologa."},
  {titulo: "Yadira Canacúan",descripcion: "Biologa."},
  {titulo: "Alejandra Archundia",descripcion: "Biologa"},
];


export default function NosotrosPage() {
  return (
    <main>
      {nosotrosContent.map((integrante, index) => (
        <div className={`flex flex-1 flex-col justify-center bg-beige px-6 py-16 ${
        index % 2 === 0 ? 'items-start' : 'items-end'
        }`} key={index}>
      <div className="w-full max-w-2xl rounded-2xl border-2 border-verde bg-white p-8 text-center shadow-lg sm:p-12">
        <h1 className="text-3xl font-bold text-verde sm:text-4xl">{integrante.titulo}</h1>
        {integrante.descripcion && (
          <p className="mt-4 text-lg leading-7 text-zinc-700">{integrante.descripcion}</p>
        )}
      </div>
    </div>
      ))}
    </main>
  );
}
