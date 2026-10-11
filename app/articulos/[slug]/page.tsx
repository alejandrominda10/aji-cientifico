import PlantillaPagina from "@/components/PlantillaPagina";

export const instant = false;

export default async function ArticuloPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <PlantillaPagina
      titulo={`Artículo: ${slug}`}
      descripcion="Contenido del artículo próximamente."
    />
  );
}
