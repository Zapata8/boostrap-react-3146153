import React from 'react'
import "./App.css"
import { NavBar } from './componets/NavBar'
import { ExtensionCard } from './componets/ExtensionCard'
import { LoginForm } from './componets/LoginForm'
import { ProductCard } from './componets/ProductCard'
export const App = () => {
  return (
    <>


      <NavBar />
      <div className='containerCards'>

        <ExtensionCard cardTitle="Google translate"
          cardImage="😎"
          cardDescription="es un servicio gratuito que traduce texto, documentos y sitios web entre idiomas utilizando traducción automática neuronal" />
        <ExtensionCard cardTitle="spotify"
          cardImage="👽"
          cardDescription="plataforma de streaming de música, podcasts y videos" />
        <ExtensionCard cardTitle="Tik tok"
          cardImage="🎶"
          cardDescription="es una aplicación de redes sociales que permite a los usuarios crear, editar y compartir videos cortos" />
        <ExtensionCard cardTitle="Youtube"
          cardImage=".👌"
          cardDescription="plataforma en línea gratuita que permite a los usuarios subir, compartir y ver videos" />
        <ExtensionCard cardTitle="nequi"
          cardImage="🤞"
          cardDescription="Nequi es una plataforma financiera digital, también conocida como billetera electrónica o banco digital" />
        <ExtensionCard cardTitle="Whatsaap"
          cardImage="🌚"
          cardDescription="texto corto en el perfil de un usuario o en un grupo que sirve para presentarse, explicar de qué trata o cuál es el propósito de la conversación" />
        <ExtensionCard cardTitle="Facebook"
          cardImage="😉"
          cardDescription="es una red social que permite a las personas conectar, compartir fotos, videos y noticias, y participar en grupos de interés común. " />
        <ExtensionCard cardTitle="Temu"
          cardImage="😂"
          cardDescription="una aplicación y sitio web que conecta a consumidores con vendedores y fabricantes para vender una amplia variedad de artículos a precios económicos." />
        <ExtensionCard cardTitle="Instagram"
          cardImage="🤦‍♂️"
          cardDescription="red social para compartir fotos y videos" />



      </div>
      <h1>react+boostrap</h1>

      <LoginForm />
      <div className="container">
        <div className="row">

        
        <div className="col-12 col-md-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mt-4 mt-md-0">
          <ProductCard />
        </div>
        <div className="col-12 col-md-12 col-lg-4 mt-4 mt-lg-0">
          <ProductCard />
        </div>
        </div>
      </div>

    </>
  )
}






























































