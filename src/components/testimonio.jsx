import React from "react";
import "../css/testimonio.css"

/* COMPONENTE FUNCIONAL DE REACT - ESCRITO EN JSX (JAVASCRIPT XML) - TIENE QUE EMPEZAR OBLIGATORIAMENTE CON MAYUSCULA*/
function Testimonio(props) {
	return (
		/* EN JSX SE UTILIZA EN LAS ETIQUETAS HTML "className" EN VEZ DE "class" PARA ASIGNAR CLASES CSS */
		<div className="contenedor-testimonio">
			<img className="imagen-testimonio" src={require(`../images/testimonio-${props.imagen}.png`)} alt={`Foto testimonio-${props.nombre}`} />
			<div className="contenedor-texto-testimonio">
				<p className="nombre-testimonio"><strong>{props.nombre}</strong> de {props.pais}</p>
				<p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
				<p className="texto-testimonio">"{props.testimonio}"</p>
			</div>
		</div>
	);
};

export default Testimonio;