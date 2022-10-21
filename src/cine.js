import { Fragment, useEffect, useState } from "react";
import "./estilos.css";
import ImgVarios from "./img/varios/ImgVarios";
import ImgPelis from "./img/pelicula/ImgPelis";
import ImgCines from "./img/cine/ImgCines";
import ReactPlayer from "react-player";

const Cargarcines = () => {
	const url = "https://oaemdl.es/cinestar_sweb/servicios.php?id=getCines";
	//*
	const [todos, setTodos] = useState();
	const pelis = async () => {
		const responseCines = await fetch(url);
		console.log(responseCines.status);
		const cinesJSON = await responseCines.json();
		setTodos(cinesJSON);
	};
	useEffect(() => {
		pelis();
	}, []);
	return (
		<>
			{!todos
				? "Cargando..."
				: todos.map((cine, index) => {
					return (
						<Fragment key={index}>
							<div className="contenido-cine">
								<img
									src={ImgCines[cine.id - 1].img1}
									width="227"
									height="170"
								/>
								<div className="datos-cine">
									<h4>{cine.RazonSocial}</h4>
									<br />
									<span>
										{cine.Direccion} - {cine.Detalle}
										<br />
										<br />
										Teléfono: {cine.Telefonos}
									</span>
								</div>
								<br />
								<a href={"index.html?web=3&idCine=" + cine.id}>
									<img src={ImgVarios.img9} width="150" height="40" />
								</a>
							</div>
						</Fragment>
					);
				})}
		</>
	);
};
const CargarNombre = () => {
	const idCine = new URLSearchParams(window.location.search).get("idCine");
	const url =
		"https://oaemdl.es/cinestar_sweb/servicios.php?id=getCine&idCine=";
	//*
	const [todos, setTodos] = useState();
	const pelis = async () => {
		const responseCine = await fetch(url.concat(idCine));
		console.log(responseCine.status);
		const cineJSON = await responseCine.json();
		setTodos(cineJSON);
	};
	useEffect(() => {
		pelis();
	}, []);
	return (
		<>
			{!todos
				? "Cargando..."
				: todos.map((cine, index) => {
					return (
						<Fragment key={index}>
							<h2 id="cine">{cine.RazonSocial}</h2>
						</Fragment>
					);
				})}
		</>
	);
};
const Cargarcine = () => {
	const idCine = new URLSearchParams(window.location.search).get("idCine");
	const url =
		"https://oaemdl.es/cinestar_sweb/servicios.php?id=getCine&idCine=";
	//*
	const [todos, setTodos] = useState();
	const pelis = async () => {
		const responseCine = await fetch(url.concat(idCine));
		console.log(responseCine.status);
		const cinesJSON = await responseCine.json();
		setTodos(cinesJSON);
	};
	useEffect(() => {
		pelis();
	}, []);
	return (
		<>
			{!todos
				? "Cargando..."
				: todos.map((cine, index) => {
					return (
						<Fragment key={index}>
							<p>
								{cine.Direccion} - {cine.Detalle}
							</p>
							<p>Teléfono: {cine.Telefonos}</p>
							<br />
						</Fragment>
					);
				})}
		</>
	);
};
let i = 0;
function impar() {
	var clase = "";
	if (i % 2 == 0) {
		clase = "fila";
		return clase;
	} else {
		clase = "fila impar";
		return clase;
	}
}
const CargarTarifa = () => {
	const idCine = new URLSearchParams(window.location.search).get("idCine");
	const url2 =
		"https://oaemdl.es/cinestar_sweb/servicios.php?id=getCineTarifas&idCine=";
	//*
	const [todos, setTodos] = useState();
	const pelis = async () => {
		const responseTarifa = await fetch(url2.concat(idCine));
		console.log(responseTarifa.status);
		const tarifaJSON = await responseTarifa.json();
		setTodos(tarifaJSON);
	};
	useEffect(() => {
		pelis();
	}, []);
	return (
		<>
			{!todos
				? "Cargando..."
				: todos.map((tarifa, index) => {
					{
						i++;
					}
					return (
						<Fragment key={index}>
							<div className={impar()}>
								<div className="celda-titulo">{tarifa.DiasSemana}</div>
								<div className="celda">{tarifa.Precio}</div>
							</div>
						</Fragment>
					);
				})}
		</>
	);
};
const CargarHorario = () => {
	const idCine = new URLSearchParams(window.location.search).get("idCine");
	const url3 =
		"https://oaemdl.es/cinestar_sweb/servicios.php?id=getCinePeliculas&idCine=";
	//*
	const [todos, setTodos] = useState();
	const pelis = async () => {
		const responseHorario = await fetch(url3.concat(idCine));
		console.log(responseHorario.status);
		const horarioJSON = await responseHorario.json();
		setTodos(horarioJSON);
	};
	useEffect(() => {
		pelis();
	}, []);
	return (
		<>
			<div className="fila">
				<div className="celda-cabecera">Películas</div>
				<div className="celda-cabecera">Horarios</div>
			</div>
			{!todos
				? "Cargando..."
				: todos.map((horario, index) => {
					i++
					return (
						<Fragment key={index}>
							<div className={impar()}>
								<div className="celda-titulo">{horario.Titulo}</div>
								<div className="celda">{horario.Horarios}</div>
							</div>
						</Fragment>
					);
				})}
		</>
	);
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
	return (
		<>
			{!todos
				? "Cargando..."
				: todos.map((todo, index) => {
					return (
						<Fragment key={index}>
							<div className="datos-pelicula">
								<h2>{todo.Titulo}</h2>
								<p>{todo.Sinopsis}</p>
								<br />
								<div className="tabla">
									<div className="fila">
										<div className="celda-titulo">Título Original :</div>
										<div className="celda">{todo.Titulo}</div>
									</div>
									<div className="fila">
										<div className="celda-titulo">Estreno :</div>
										<div className="celda">{fecha(todo.FechaEstreno)}</div>
									</div>
									<div className="fila">
										<div className="celda-titulo">Género :</div>
										<div className="celda">{genero(todo.Generos)}</div>
									</div>
									<div className="fila">
										<div className="celda-titulo">Director :</div>
										<div className="celda">{todo.Director}</div>
									</div>
									<div className="fila">
										<div className="celda-titulo">Reparto :</div>
										<div className="celda">{todo.Reparto}</div>
									</div>
								</div>
							</div>
							<img src={ImgPelis[todo.id - 1]} width="160" height="226" />
							<br />
							<br />
							<ReactPlayer
								width="640px"
								height="360px"
								url={yutu + todo.Link}
							></ReactPlayer>
						</Fragment>
					);
				})}
		</>
	);
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
function Cines() {
	return (
		<>
			<br />
			<h1>Nuestros Cines</h1>
			<br />
			<div id="cajita">
				<Cargarcines></Cargarcines>
			</div>
		</>
	);
}

function Cine() {
	return (
		<>
			<CargarNombre></CargarNombre>
			<div className="cine-info">
				<div className="cine-info datos">
					<div id="cajita">
						<Cargarcine></Cargarcine>
					</div>
					<div className="tabla" id="tabla">
						<CargarTarifa></CargarTarifa>
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
				<img src={ImgCines[0].img2} />
				<br />
				<br />
				<h4>
					Los horarios de cada función están sujetos a cambios sin previo aviso.
				</h4>
				<br />
				<div className="cine-info peliculas">
					<div className="tabla" id="horario">
						<CargarHorario></CargarHorario>
					</div>
				</div>
			</div>
			<div>
				<img style={{float:"left"}} src={ImgCines[0].img3} />
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
function Web() {
	const pagina = new URLSearchParams(window.location.search).get("web");
	if (pagina != null) {
		switch (pagina) {
			case "1":
				return Cartelera();
			case "2":
				return Cines();
			case "3":
				return Cine();
			case "4":
				return Pelicula();
		}
	}
}

export default Web;
