import ImgVarios from "./img/varios/ImgVarios"
import './estilos.css'
import Web from "./cine";

function Contenido(){
    return <div className="contenido">
    <div className="publicidad">
        <a href="http://www.cinestar.com.pe/starcard/"><img src={ImgVarios.img5}/></a>
        <a href="http://www.cinestar.com.pe/cinefilo_star/"><img src={ImgVarios.img6}/></a>
    </div>
    <div className="contenido-interno" id="contenido-interno">
        <Web></Web>
    </div>
</div>
}

export default Contenido