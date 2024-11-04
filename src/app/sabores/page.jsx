import estilos from "./Sabores.module.css";
import Image from "next/image";

import Oreo from "/public/sabor-oreo.png";
import Pistache from "/public/sabor-pistache.png";
import CookiesAvela from "/public/sabor-cookies-avela.png";
import Kiwi from "/public/sabor-kiwi.png";
import Morango from "/public/sabor-morango.png";
import Limao from "/public/sabor-limao.png";



export default function Sabores() {
    return (
        <main className={estilos.main}>

            <div className={estilos.container_capa}>
                <h1>NOSSOS SABORES</h1>
            </div>

            <div className={estilos.container_sabores}>

                <h2>SABORES DE SORVETE</h2>

                <div className={estilos.container_cards}>
                    <div className={estilos.card_sabor}>
                        <Image className={estilos.imagem_card} src={Oreo} alt="Sorvete oreo com biscoistos"></Image>
                        <h4>Sorvete de Oreo</h4>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>
                    <div className={estilos.card_sabor}>
                        <Image className={estilos.imagem_card} src={Pistache} alt="Sorvete de pistache com sementes"></Image>
                        <h4>Sorvete de Pistache</h4>
                        <p>
                            Cremoso sorvete sabor pistache com pedacinhos de semente
                        </p>
                    </div>
                    <div className={estilos.card_sabor}>
                        <Image className={estilos.imagem_card} src={CookiesAvela} alt="Sorvete cookies e avelã"></Image>
                        <h4>Sorvete Cookies & Avelã</h4>
                        <p>
                            O nosso melhor sorvete. Você vai adorar o sabor.
                        </p>
                    </div>
                    <div className={estilos.card_sabor}>
                        <Image className={estilos.imagem_card} src={Kiwi} alt="Sorvete de kiwi"></Image>
                        <h4>Sorvete de Kiwi</h4>
                        <p>
                            Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.
                        </p>
                    </div>
                    <div className={estilos.card_sabor}>
                        <Image className={estilos.imagem_card} src={Morango} alt="Sorvete de morango"></Image>
                        <h4>Sorvete de Morango</h4>
                        <p>
                            Sorvete de morango gourmet. Tradicional e saboroso.
                        </p>
                    </div>
                    <div className={estilos.card_sabor}>
                        <Image className={estilos.imagem_card} src={Limao} alt="Sorvete de limão"></Image>
                        <h4>Sorvete de Limão siciliano</h4>
                        <p>
                            O incrivel sorvete gourmet de limão siciliano vai te encantar.
                        </p>
                    </div>
                </div>

            </div>

        </main>
    )
}