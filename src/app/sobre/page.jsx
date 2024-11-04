import estilos from "./Sobre.module.css";
import Image from "next/image";

import GrupoSorvete from "/public/sobre-image.jpg";
import Sorveteria from "/public/sorveteria.jpg";

export default function Sobre() {
    return (
        <main className={estilos.main}>

            <div className={estilos.container_capa}>
                <h1>A GELATERIA</h1>
            </div>

            <div className={estilos.container_sobre}>
                <div className={estilos.sobre_subtitulo_slogan}>
                    <h2>Sobre nós</h2>
                    <h4>Nós simplesmente amamos sorvete!</h4>
                </div>
                <p>
                    Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.
                </p>
                <p>
                    Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                </p>
            </div>

            <div className={estilos.container_cards}>

                <div className={estilos.card_imagem}>
                    <Image className={estilos.sobre_imagem} src={GrupoSorvete} alt="Grupo reunido tomando sorvete"></Image>
                </div>
                <div className={estilos.card_imagem}>
                    <Image className={estilos.sobre_imagem} src={Sorveteria} alt="Sorveteria gelateria"></Image>
                </div>
                
            </div>
        </main>
    )
}