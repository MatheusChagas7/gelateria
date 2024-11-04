import estilos from "./Rodape.module.css";
import Image from "next/image";
import Logo from "/public/logo.png";

export default function Rodape() {
    return (
        <footer className={estilos.footer}>

            <div className={estilos.contato}>

                <Image src={Logo} className="logo" alt="Logo gelateria"></Image>

                <div className={estilos.cards_container}>
                    <div className={estilos.card_contato}>
                        <h4>ENDEREÇO</h4>
                        <span>Av.Bernardino de Campos, 98 São Paulo, SP 12345-678</span>
                    </div>

                    <div className={estilos.card_contato}>
                        <h4>CONTATO</h4>
                        <span>Info@meusite.com</span>
                        <span>Tel: (21) 96969-3385</span>
                    </div>
                    <div className={estilos.card_contato}>
                        <h4>HORÁRIOS</h4>
                        <span>ABERTO TODOS OS DIAS</span>
                        <span>10:00 - 22:00</span>
                    </div>
                </div>
            </div>

            <div className={estilos.autor}>
                <p>Gelateria. Orgulhosamente desenvolvido por Matheus Chagas</p>
            </div>

        </footer>
    )
}