import { Fragment, useEffect, useState } from "react";
import "./estilos.css";
import ImgVarios from "./img/varios/ImgVarios";
import ImgPelis from "./img/pelicula/ImgPelis";
import ReactPlayer from "react-player";


const Cargarcines = async () => {
  try {
    const cines = await fetch(
      "https://oaemdl.es/cinestar_sweb/servicios.php?id=getCines"
    );
    console.log(cines);

    //respuestas
    if (cines.status === 200) {
      const datos = await cines.json();

      let html = "";
      datos.forEach((cine) => {
        html +=
          '<div className="contenido-cine">' +
          '<img src="img/cine/' +
          cine.id +
          '.1.jpg" width="227" height="170">' +
          '<div className="datos-cine">' +
          "<h4>" +
          cine.RazonSocial +
          "</h4><br>" +
          "<span>" +
          cine.Direccion +
          " - " +
          cine.Detalle +
          "<br><br>Teléfono: " +
          cine.Telefonos +
          "</span>" +
          "</div>" +
          "<br>" +
          '<a href="index.html?web=3&idCine=' +
          cine.id +
          '">' +
          '<img src="img/varios/ico-info2.png" width="150" height="40">' +
          "</a>" +
          "</div>";
      });
      //document.getElementById("cajita").dangerouslySetInnerHTML = html;
      return { html };
    }
  } catch (error) {
    console.log(error);
  }
};
const Cargarcine = async () => {
  const idCine = new URLSearchParams(window.location.search).get("idCine");
  const url =
    "https://oaemdl.es/cinestar_sweb/servicios.php?id=getCine&idCine=";
  try {
    const cine = await fetch(url.concat(idCine));
    console.log(cine);
    //respuestas
    if (cine.status === 200) {
      const datos = await cine.json();

      let html1 = "";
      let Ncine = "";
      datos.forEach((cine) => {
        Ncine = cine.RazonSocial;
        html1 +=
          "<p>" +
          cine.Direccion +
          " - " +
          cine.Detalle +
          "</p>" +
          "<p>Teléfono: " +
          cine.Telefonos +
          "</p>" +
          "<br>";
      });
      document.getElementById("cajita").dangerouslySetInnerHTML = html1;
      //document.getElementById("cine").dangerouslySetInnerHTML = Ncine;
      return { Ncine };
    }
  } catch (error) {
    console.log(error);
  }
};
const CargarTarifa = async () => {
  const idCine = new URLSearchParams(window.location.search).get("idCine");
  const url2 =
    "https://oaemdl.es/cinestar_sweb/servicios.php?id=getCineTarifas&idCine=";
  try {
    const tarifa = await fetch(url2.concat(idCine));
    console.log(tarifa);

    //respuestas
    if (tarifa.status === 200) {
      const datos = await tarifa.json();

      let html2 = "";
      let i = 1;
      datos.forEach((tarifa) => {
        if (i % 2 == 0) {
          html2 +=
            '<div className="fila">' +
            '<div className="celda-titulo">' +
            tarifa.DiasSemana +
            "</div>" +
            '<div className="celda">' +
            tarifa.Precio +
            "</div>" +
            "</div>";
        } else {
          html2 +=
            '<div className="fila impar">' +
            '<div className="celda-titulo">' +
            tarifa.DiasSemana +
            "</div>" +
            '<div className="celda">' +
            tarifa.Precio +
            "</div>" +
            "</div>";
        }
        i++;
      });
      //document.getElementById("tabla").dangerouslySetInnerHTML = html2;
      return { html2 };
    }
  } catch (error) {
    console.log(error);
  }
};
const CargarHorario = async () => {
  const idCine = new URLSearchParams(window.location.search).get("idCine");
  const url3 =
    "https://oaemdl.es/cinestar_sweb/servicios.php?id=getCinePeliculas&idCine=";
  try {
    const horario = await fetch(url3.concat(idCine));
    console.log(horario);

    //respuestas
    if (horario.status === 200) {
      const datos = await horario.json();

      let html3 =
        '<div className="fila">' +
        '<div className="celda-cabecera">Películas</div>' +
        '<div className="celda-cabecera">Horarios</div>' +
        "</div>";
      let i = 1;
      datos.forEach((horario) => {
        if (i % 2 == 0) {
          html3 +=
            '<div className="fila">' +
            '<div className="celda-titulo">' +
            horario.Titulo +
            "</div>" +
            '<div className="celda">' +
            horario.Horarios +
            "</div>" +
            "</div>";
        } else {
          html3 +=
            '<div className="fila impar">' +
            '<div className="celda-titulo">' +
            horario.Titulo +
            "</div>" +
            '<div className="celda">' +
            horario.Horarios +
            "</div>" +
            "</div>";
        }
        i++;
      });
      //document.getElementById("horario").dangerouslySetInnerHTML = html3;
      return { html3 };
    }
  } catch (error) {
    console.log(error);
  }
};
const CargarPelis = () => {
  const idCine = new URLSearchParams(window.location.search).get("id");
  const url4 =
    "https://oaemdl.es/cinestar_sweb/servicios.php?id=getPeliculas&idEstadoPelicula=";
  const [todos, setTodos] = useState();
  const yutu = "https://www.youtube.com/watch?v=";
  const pelis = async () => {
    const responsePelis = await fetch(url4.concat(idCine));
    console.log(responsePelis.status);
    const pelisJSON = await responsePelis.json();
    setTodos(pelisJSON);
  };
  useEffect(() => {
    pelis();
  }, []);
  return (
    <>
      {!todos
        ? "Cargando..."
        : todos.map((todo, index) => {
            return (
              <Fragment key={index}>
                <div className="datos-pelicula">
                  <h2>{todo.Titulo}</h2>
                  <br />
                  <p>{todo.Sinopsis}</p>
                  <br />
                  <div className="boton-pelicula">
                    <a href={"index.html?web=4&id=" + todo.id}>
                      <img
                        src={ImgVarios.img7}
                        width="120"
                        height="30"
                        alt="Ver info"
                      />
                    </a>
                  </div>
                  <div className="boton-pelicula">
                    <a href={yutu + todo.Link} target="_blank">
                      <img
                        src={ImgVarios.img8}
                        width="120"
                        height="30"
                        alt="Ver trailer"
                      />
                    </a>
                  </div>
                </div>
                <img src={ImgPelis[todo.id - 1]} width="160" height="226" />
                <br />
                <br />
              </Fragment>
            );
          })}
    </>
  );
};
const CargarPeli = () => {
  const idCine = new URLSearchParams(window.location.search).get("id");
  const url4 =
    "https://oaemdl.es/cinestar_sweb/servicios.php?id=getPelicula&idPelicula=";
    const yutu = "https://www.youtube.com/watch?v=";
  const [todos, setTodos] = useState();
  const pelis = async () => {
    const responsePeli = await fetch(url4.concat(idCine));
    console.log(responsePeli.status);
    const peliJSON = await responsePeli.json();
    setTodos(peliJSON);
  };
  useEffect(() => {
    pelis();
  }, []);
  return(
    <>
         {!todos
        ? "Cargando..."
        : todos.map((todo, index) => {
            return (
                <Fragment key={index}>
                    <div className="datos-pelicula">
                <h2>
                {todo.Titulo}
                </h2>
                <p>
                {todo.Sinopsis}
                </p>
                <br/>
                <div className="tabla">
                <div className="fila">
                <div className="celda-titulo">Título Original :</div>
                <div className="celda">
                {todo.Titulo}
                </div>
                </div>
                <div className="fila">
                <div className="celda-titulo">Estreno :</div>
                <div className="celda">
                {fecha(todo.FechaEstreno)}
                </div>
                </div>
                <div className="fila">
                <div className="celda-titulo">Género :</div>
                <div className="celda">
                {genero(todo.Generos)}
                </div>
                </div>
                <div className="fila">
                <div className="celda-titulo">Director :</div>
                <div className="celda">
                {todo.Director}
                </div>
                </div>
                <div className="fila">
                <div className="celda-titulo">Reparto :</div>
                <div className="celda">
                {todo.Reparto}
                </div>
                </div>
                </div>
                </div>
                <img src={ImgPelis[todo.id-1]} width="160" height="226"/><br/><br/>
                <ReactPlayer width="640px" height="360px" url={yutu + todo.Link}></ReactPlayer>
                </Fragment>
            )})}
    </>
  )
};
//todo Funcion para convertir numeros en generos
function genero(num) {
  let generos = [
    "Acción",
    "Animación",
    "Aventura",
    "Biografico",
    "Ciencia Ficción",
    "Comedia",
    "Drama",
    "Familiar",
    "Fantasía",
    "Histórico",
    "Musical",
    "Romance",
    "Suspenso",
    "Terror",
    "Thriller",
  ];
  let detalle = num.split(",");

  let gen = "";
  for (let index = 0; index < detalle.length; index++) {
    gen += generos[detalle[index]] + "/";
  }
  return gen;
}
//! Convertir numeros a letras (fecha)
function fecha(fecha) {
  let meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  let fec = fecha.split("/");
  let mes = parseInt(fec[1]) - 1;
  return fec[2] + " de " + meses[mes] + " de " + fec[0];
}
//? Index
function Cartelera() {
  return (
    <>
      <br />
      <h1>Cartelera</h1>
      <br />
      <div className="contenido-pelicula" id="peli">
        <CargarPelis></CargarPelis>
      </div>
    </>
  );
}
/* let cartelera = "<br>" +
                    "<h1>Cartelera</h1><br>" +
                        "<div className='contenido-pelicula' id='peli'>" +
                            "<!-- Contenido -->" +
                            "</div>"; */
function Cines() {
  return (
    <>
      <br />
      <h1>Nuestros Cines</h1>
      <br />
      <div id="cajita">{/* <Cargarcines></Cargarcines> */}</div>
    </>
  );
}
/* let cines = "<br>" +
                            "<h1>Nuestros Cines</h1><br>" +
                                "<div id='cajita'></div>"; */

function Cine() {
  return (
    <>
      <h2 id="cine"></h2>
      <div className="cine-info">
        <div className="cine-info datos">
          <div id="cajita">{/* <Cargarcine></Cargarcine> */}</div>
          <div className="tabla" id="tabla">
            {/* <CargarTarifa></CargarTarifa> */}
          </div>
          <div className="aviso">
            <p>
              A partir del 1ro de julio de 2016, Cinestar Multicines realizará
              el cobro de la comisión de S/. 1.00 adicional al tarifario
              vigente, a los usuarios que compren sus entradas por el aplicativo
              de Cine Papaya para Cine Star Comas, Excelsior, Las Américas,
              Benavides, Breña, San Juan, UNI, Aviación, Sur, Porteño, Tumbes y
              Tacna.
            </p>
          </div>
        </div>
        <img src="img/cine/1.2.jpg" />
        <br />
        <br />
        <h4>
          Los horarios de cada función están sujetos a cambios sin previo aviso.
        </h4>
        <br />
        <div className="cine-info peliculas">
          <div className="tabla" id="horario">
            {/* <CargarHorario></CargarHorario> */}
          </div>
        </div>
      </div>
      <div>
        <img style="float:left;" src="img/cine/1.3.jpg" />
        <span className="tx_gris">
          Precios de los juegos: desde S/1.00 en todos los Cine Star.
          <br />
          Horario de atención de juegos es de 12:00 m hasta las 10:30 pm.
          <br /> <br />
          Visitános y diviértete con nosotros.
          <br /> <br />
          <b>CINESTAR</b>, siempre pensando en tí.
        </span>
      </div>
    </>
  );
}
/* let cine =
  "<h2 id='cine'></h2>" +
                                "<div className='cine-info'>" +
                                    "<div className='cine-info datos'>" +
                                        "<div id='cajita'></div>" +
                                        "<div className='tabla' id='tabla'>" +
                                            "</div>" +
                                        "<div className='aviso'>" +
                                            "<p>A partir del 1ro de julio de 2016, Cinestar Multicines realizará el cobro de la comisión de" +
                                                "S/. 1.00 adicional al tarifario vigente, a los usuarios que compren sus entradas por el" +
                                                "aplicativo de Cine Papaya para Cine Star Comas, Excelsior, Las Américas, Benavides, Breña," +
                                                "San Juan, UNI, Aviación, Sur, Porteño, Tumbes y Tacna.</p>" +
                                            "</div>" +
                                        "</div>" +
                                    "<img src='img/cine/1.2.jpg'>" +
                                        "<br><br>" +
                                            "<h4>Los horarios de cada función están sujetos a cambios sin previo aviso.</h4><br>" +
                                                "<div className='cine-info peliculas'>" +
                                                    "<div className='tabla' id='horario'>" +
                                                        "</div>" +
                                                    "</div>" +
                                                "</div>" +
                                            "<div>" +
                                                "<img style='float:left;' src='img/cine/1.3.jpg'>" +
                                                    "<span className='tx_gris'>Precios de los juegos: desde S/1.00 en todos los Cine Star.<br>" +
                                                        "Horario de atención de juegos es de 12:00 m hasta las 10:30 pm." +
                                                        "<br> <br>" +
                                                            "Visitános y diviértete con nosotros." +
                                                            "<br> <br>" +
                                                                "<b>CINESTAR</b>, siempre pensando en tí." +
                                                                "</span>" +
                                                                "</div>"; */

function Pelicula() {
  return (
    <>
      <br />
      <h1>Cartelera</h1>
      <br />
      <div className="contenido-pelicula" id="peli"></div>
      <CargarPeli></CargarPeli>
      <div className="pelicula-video" id="yutu"></div>
    </>
  );
}
/* let pelicula =
  "<br>" +
                                                                "<h1>Cartelera</h1><br>" +
                                                                    "<div className='contenido-pelicula' id='peli'>" +
                                                                        "</div>" +
                                                                    "<div className='pelicula-video' id='yutu'>" +
                                                                        "</div>"; */
function Web() {
  const pagina = new URLSearchParams(window.location.search).get("web");
  if (pagina != null) {
    switch (pagina) {
      case "1":
        return Cartelera();
        //cargarPelis();
        break;

      case "2":
        return Cines();
        //cargarcines();
        break;
      case "3":
        return Cine();
        //cargarcine();
        //cargarTarifa();
        //cargarHorario();
        break;
      case "4":
        return Pelicula();
        //cargarPeli();
        break;
    }
  }
}

export default Web;