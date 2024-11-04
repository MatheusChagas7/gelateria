import Image from "next/image";
import estilos from "./page.module.css";

import Sabores from "/public/banner-sabores.jpg"
import Eventos from "/public/eventos-image.jpg"
import Sobre from "/public/sobre-image.jpg"


export default function Home() {
  return (
    <main className={estilos.main}>

      <div className={estilos.container_capa}>
        <h1>SORVETE ARTESANAL</h1>
      </div>

      <div className={estilos.container_info}>

        <div className={estilos.card_info}>
          <Image className={estilos.card_info_imagem} src={Sabores} alt="Sabores de diversos sorvetes"></Image>
        </div>

        <div className={estilos.card_info}>
          <h2>NOSSOS SABORES</h2>
          <h4>Novos e deliciosos!</h4>
          <p>
            Sorvete bom é aquele feito com os melhores ingredientes! 
            Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem 
            nenhum conservante! Também temos opções sem lactose e sem açúcar. 
            Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
          </p>
        </div>

        <div className={estilos.card_info}>
          <h2>NOSSOS EVENTOS</h2>
          <h4>Delicias com sorvete!</h4>
          <p>
            Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui 
            prontinhos para te atender e oferecer os melhores eventos com os 
            melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo 
            aqui com a gente.
          </p>
        </div>

        <div className={estilos.card_info}>
          <Image className={estilos.card_info_imagem} src={Eventos} alt="Sabores de diversos sorvetes"></Image>
        </div>

        <div className={estilos.card_info}>
          <Image className={estilos.card_info_imagem} src={Sobre} alt="Sabores de diversos sorvetes"></Image>
        </div>
        
        <div className={estilos.card_info}>
          <h2>SOBRE NÓS</h2>
          <h4>Alegria em cada casquinha!</h4>
          <p>
            Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos 
            há anos no mercado produzindo o que tem de melhor para o nosso cliente 
            e você não pode ficar de fora dessa. Venha nos fazer uma visita e aproveite 
            o melhor atendimento e o melhor sorvete da cidade.
          </p>
        </div>

      </div>

    </main>
  );
}