import { loadManifestWithRetries } from 'next/dist/server/load-components';
import estilos from './Topo.module.css';
import Image from 'next/image';
import Link from 'next/link';

import Logo from "/public/logo.png";

export default function Topo(){
    return(
        <header className={estilos.header}>
            <div className={estilos.topo_container}>
                <Image className="logo" src={Logo} alt='Logo gelateria'></Image>
                <nav className={estilos.links_container}>
                    <Link href="/" className={estilos.link_topo}>Home</Link>
                    <Link href="/sabores" className={estilos.link_topo}>Sabores</Link>
                    <Link href="/sobre" className={estilos.link_topo}>Sobre</Link>
                </nav>
            </div>
        </header>
    )
}