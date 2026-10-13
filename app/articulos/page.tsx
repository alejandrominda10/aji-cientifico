import Link from "next/link";

interface Articulo {
  slug: string;
  titulo: string;
  resumen: string;
  fecha: string;
  autor: string;
}

const articulos: Articulo[] = [
  {
    slug: 'marte-agua',
    titulo: '¿Hay agua en Marte?',
    resumen: 'Hallazgos recientes sobre depósitos subterráneos en el planeta rojo.',
    fecha: '12 de Octubre, 2026',
    autor: 'Samantha Minda',
  },
];

export default function ArticulosPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-verde mb-8 text-center">
        Artículos Científicos 🔬
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articulos.map((articulo) => (
          <Link
            key={articulo.slug}
            href={`/articulos/${articulo.slug}`}
            className="block rounded-2xl border-2 border-verde bg-white p-6 shadow-md transition-shadow"
          >
            <p className="mb-2 text-sm text-zinc-500">
              {articulo.fecha} • Por {articulo.autor}
            </p>
            <h2 className="mb-2 text-xl font-bold text-verde">
              {articulo.titulo}
            </h2>
            <p className="text-zinc-700">{articulo.resumen}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
