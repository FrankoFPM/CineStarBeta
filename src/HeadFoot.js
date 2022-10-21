import './estilos.css'
import ImgVarios from './img/varios/ImgVarios';

export function HeaderContainer() {
    return (
        <header>
            <nav className="nav-sec">
                <a href="index.html">Inicio</a>&nbsp;&nbsp;l&nbsp;&nbsp;
                <a href="http://www.cinestar.com.pe/quienes_somos">Quiénes somos</a>
                &nbsp;&nbsp;l&nbsp;&nbsp;
                <a href="http://www.cinestar.com.pe/trabaja_con_nosotros">
                    Trabaja con nosotros
                </a>
                &nbsp;&nbsp;l&nbsp;&nbsp;
                <a href="https://www.efact.pe/consult.html" target="_blank">
                    Consulta tu comprobante de pago
                </a>
                &nbsp;&nbsp;l&nbsp;&nbsp;
                <a
                    href="http://www.cinestar.com.pe/contactenos/#contenido_titulo"
                    className="anchorLink"
                >
                    Contáctenos
                </a>
            </nav>
            <div className="area-logo">
                <a href="index.html">
                    <img src={ImgVarios.img1} />
                </a>
            </div>
            <nav className="menu">
                <span className="img-social">
                    <a href="http://www.facebook.com/multicinestar" target="_blank">
                        <img src={ImgVarios.img2} />
                    </a>
                    <a href="http://www.twitter.com/multicinestar" target="_blank">
                        <img src={ImgVarios.img3} />
                    </a>
                </span>
                <span className="social">Síguenos en: </span>
                <ul className="menu-principal">
                    <li className="menu-item">
                        <a href="index.html?web=1&id=1">Cartelera</a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html?web=1&id=2">Próximos estrenos</a>
                    </li>
                    <li className="menu-item">
                        <a href="http://www.cinestar.com.pe/starcard">Star Card</a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html?web=2">Nuestros Cines</a>
                    </li>
                    <li className="menu-item">
                        <a href="http://www.cinestar.com.pe/ventas_corporativas">
                            Ventas Corporativas
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="http://www.cinestar.com.pe/promociones">Promociones</a>
                    </li>
                    <li className="menu-item">
                        <a href="http://www.cinestar.com.pe/cinefilo_star">Blog</a>
                    </li>
                </ul>
            </nav>
            <div className="slider"></div>
            <div className="papaya">
                <a href="http://www.cinepapaya.com/pe/cinestar" target="_blank">
                    <img src={ImgVarios.img4} />
                </a>
            </div>
        </header>
    );
}

export function FooterContainer(){
    return <footer>
    <div className="contenido-footer">
        <p>Copyright © 2016 ® Multicines CINESTAR - Todos los Derechos Reservados</p>
    </div>
</footer>
}