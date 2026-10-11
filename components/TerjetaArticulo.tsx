// 1. Definición del tipo de datos que acepta la tarjeta
interface TarjetaArticuloProps {
  titulo: string;
  resumen: string;
}

// 2. El componente recibe las props dentro de las llaves { titulo, resumen }
export default function TarjetaArticulo({ titulo, resumen }: TarjetaArticuloProps) {
  return (
    <article>
      <h2>{titulo}</h2>
      <p>{resumen}</p>
    </article>
  );
}