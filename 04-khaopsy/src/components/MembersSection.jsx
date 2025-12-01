import React from "react";
import SectionHeader from "./SectionHeader";
import MemberCard from "./MemberCard";

import juanJose from "../assets/juan-jose.jpg";
import juanSebastian from "../assets/juan-sebastian.jpg";

function MembersSection() {
  const textoDescripcion =
    "Somos dos adolescentes que estudian Producción de Multimedia en el SENA. Comprometidos con contar historias profundas y provocadoras, creamos KHAOPSY, un proyecto transmedia que retrata el apocalipsis de forma cruda y realista. A través de imágenes, narrativa y contenido digital, buscamos generar conciencia sobre los posibles colapsos sociales y espirituales que enfrenta la humanidad. Nuestro enfoque explora cómo la psicología y la fe influyen en las decisiones humanas durante momentos de crisis extremas.";

  return (
    <section id="integrantes" className="mt-4">
  <SectionHeader title="INTEGRANTES" />

  <div className="container mt-3">
    <div className="row justify-content-center">
      <div className="col-11 col-md-6">

        
        <MemberCard
          name="Juan José"
        
          photo={juanJose}
          description=""
          
        />

 
        <p className="miembro-descripcion mx-auto text-center my-3">
          Somos dos adolescentes que estudian Producción de Multimedia en el SENA. Comprometidos con contar historias profundas y provocadoras, creamos "KHAOPSY", un proyecto transmedia que retrata el apocalipsis de forma cruda y realista. A través de imágenes, narrativa y contenido digital, buscamos generar conciencia sobre los posibles colapsos sociales y espirituales que enfrenta la humanidad. Nuestro enfoque explora cómo la psicología y la fe influyen en las decisiones humanas durante momentos de crisis extremas.
        </p>

        {/* Segundo integrante */}
        <MemberCard
          name="Juan Sebastian"
          
          photo={juanSebastian}
         
          
        />

      </div>
    </div>
  </div>
</section>
  );
}

export default MembersSection;