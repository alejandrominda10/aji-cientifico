import PlantillaPagina from "@/components/PlantillaPagina";

interface Integrante {
  titulo: string;
  descripcion: string;
}

const nosotrosContent : Integrante[] = [
  {titulo: "Samantha Minda",descripcion: "Biologa."},
  {titulo: "Angelica Criollo",descripcion: "Soy una Bióloga en formación con experiencia en trabajo de campo, inventarios botánicos y etnobotánicos, manejo de muestras vegetales y registro de conocimientos tradicionales. Con capacidad de adaptación a condiciones variables, compromiso con la investigación científica y desempeño colaborativo en equipos interdisciplinarios. Poseo un interés especial en la evolución de las orquídeas y su conservación."},
  {titulo: "Juliana Torres",descripcion: "Bióloga con especial interés en la herpetología, particularmente en el estudio de las serpientes, su diversidad, morfología, taxonomía y ecología. Mi interés profesional se orienta a la investigación científica, la conservación de la fauna silvestre y la comprensión de las relaciones entre las especies y sus ambientes. Me motiva el estudio de la diversidad de reptiles, la identificación de patrones de variación morfológica y la generación de conocimientos que contribuyan a la conservación de la biodiversidad, con especial atención a la herpetofauna del Ecuador. Busco fortalecer mis habilidades en investigación, trabajo de colección científica y análisis de datos, aportando al conocimiento y la protección de las especies."},
  {titulo: "Yadira Canacúan",descripcion: "Soy una bióloga egresada y futura palinóloga en construcción. Me apasiona la biodiversidad y la conservación, en especial el estudio de las plantas, los insectos y la restauración de ecosistemas. Cuento con experiencia en actividades de campo y monitoreo de fauna. Actualmente me estoy adentrando en el fascinante mundo del polen y las abejas sin aguijón, con el objetivo de comprender las interacciones entre las plantas y sus polinizadores, tema en el cual deseo seguir profundizando en el futuro. Me encanta aprender cosas nuevas y compartir curiosidades científicas de una manera creativa, divertida y fácil de entender para así poder contribuir en su conservación."},
  {titulo: "Alejandra Archundia",descripcion: "Descripción e intereses Soy estudiante de Biología de la Universidad Central del Ecuador. Mis principales intereses se encuentran en la ecología acuática, la biología de peces y la ecología alimentaria, especialmente en comprender cómo se alimentan los peces y cómo se relacionan con su entorno. Tengo conocimientos en análisis de contenidos estomacales, identificación de componentes dietéticos, análisis de datos biológicos y herramientas estadísticas como R y PAST."},
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
