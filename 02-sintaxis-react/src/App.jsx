import {UserCard} from "./componets/Usercard";
import { InfoCard } from "./componets/infoCard";

import { FutbolCard } from "./componets/FutbolCard";
import "./App.css";



export function App() {
   return (
       <div>
           <h1> App</h1>
           <InfoCard />
            <UserCard 
            image="https://rickandmortyapi.com/api/character/avatar/103.jpeg" 
            userName="rick"
            
             />
              <UserCard 
            image="https://rickandmortyapi.com/api/character/avatar/785.jpeg" 
            userName="Monstruo"
            
             />
             <UserCard 
            image="https://rickandmortyapi.com/api/character/avatar/826.jpeg" 
            userName="robot"
            
             />
             <UserCard 
            image="https://rickandmortyapi.com/api/character/avatar/657.jpeg" 
            userName="don"
            
             />


             <FutbolCard 
            img="https://www.fcbarcelona.com/fcbarcelona/photo/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg" 
            name="Messi"
            Parrafo="Lionel Messi es un futbolista argentino ampliamente considerado uno de los mejores de la historia, conocido por su habilidad para marcar goles y crear juego. Nacido en Rosario en 1987, su carrera profesional despegó en el FC Barcelona, donde ganó numerosos títulos, incluyendo múltiples Ligas de Campeones. Como capitán de la selección argentina, ha logrado la Copa América 2021 y, finalmente, la Copa Mundial de la FIFA 2022 en Qatar, un hito que completó su palmarés."
            
             />
             <FutbolCard 
            img="https://www.tudn.com/_next/image?url=https%3A%2F%2Fst1.uvnimg.com%2F64%2F50%2F3282eac44afeac38e5c36ea753ab%2Fgettyimages-56034481-1.jpg&w=1280&q=75" 
            name="Ronaldihno"
            Parrafo="Ronaldinho, Ronaldo de Assis Moreira, es un exfutbolista brasileño nacido en 1980, conocido por su estilo de juego espectacular, alegría y talento como mediapunta o extremo izquierdo. Se le considera uno de los mejores jugadores de la historia, habiendo ganado el Mundial con Brasil en 2002 y siendo nombrado mejor jugador del mundo por la FIFA en 2004 y 2005. Durante su carrera, jugó para clubes como el Paris Saint-Germain, el FC Barcelona (donde ganó la Liga de Campeones en 2006), el AC Milan, y la selección brasileña. ."
            
             />
             <FutbolCard 
            img="https://www.ole.com.ar/images/2024/07/16/Gun3QQMxS_720x0__1.jpg" 
            name="James "
            Parrafo=" James Rodríguez es un futbolista colombiano nacido en Cúcuta en 1991, reconocido por su gran talento, habilidad con la pierna zurda, visión de juego y capacidad goleadora. Tras su debut profesional a los 14 años con el Envigado FC, su carrera lo llevó a clubes como Banfield, donde se convirtió en el extranjero más joven en debutar y marcar en Argentina, y el Porto, con el que ganó la Europa League. Su consagración a nivel mundial ocurrió en el Mundial de Brasil 2014, donde fue el máximo goleador, lo que le valió un traspaso al Real Madrid. A pesar de su potencial, su trayectoria posterior ha estado marcada por oportunidades limitadas en algunos clubes, como el Real Madrid y el Bayern, y pasos por equipos como el Everton y el Olympiacos. "
            
             />
             <FutbolCard 
            img="https://cdn.colombia.com/sdi/2022/12/23/macnelly-torres-hablo-sobre-el-presente-de-atletico-nacional-1100775-1.jpg" 
            name="Macnelly Torres"
            Parrafo=" Macnelly Torres Berrío es un exfutbolista colombiano reconocido por su trayectoria como mediocampista ofensivo, destacando por su talento y liderazgo, especialmente en el Atlético Nacional. Tras retirarse en 2019, ha seguido vinculado al fútbol a través de proyectos de prensa, asesoría y formación juvenil, además de dedicarse a la construcción en Medellín. "
             />
       </div>
   )
}


