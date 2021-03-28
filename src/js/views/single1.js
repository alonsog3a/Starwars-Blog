import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/single.scss";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single1 = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="body">
			<div className="container">
				<div className="cuerpo">
					<div className="row">
						<div className="col-md-4">
							<img
								src="https://1000logos.net/wp-content/uploads/2017/06/StarWars-logo.png"
								className="card-img"
								alt="..."
							/>
						</div>
						<div className="col-md-6">
							<div className="card-body">
								<h5 className="card-title">{store.planets[params.theid].name}</h5>
								<p className="card-text">
									Hay inquietud en el Senado Galáctico. Varios miles de sistemas solares han declarado
									sus intenciones de abandonar la República.
								</p>
							</div>
						</div>
						<div className="columna">
							<div className="row">
								<div className="col-2">
									<h5>Name</h5>
									<p>{store.planets[params.theid].name}</p>
								</div>

								<div className="col-2">
									<h5>Rotation</h5>
									<p>{store.planets[params.theid].rotation_period}</p>
								</div>
								<div className="col-2">
									<h5>Terrain</h5>
									<p>{store.planets[params.theid].terrain}</p>
								</div>

								<div className="col-2">
									<h5>Diameter</h5>
									<p>{store.planets[params.theid].diameter}</p>
								</div>

								<div className="col-2">
									<h5>Gravity</h5>
									<p>{store.planets[params.theid].gravity}</p>
								</div>

								<div className="col-2">
									<h5>Population</h5>
									<p>{store.planets[params.theid].population}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Link to="/">
					<button type="button" className="btn btn-warning">
						Back
					</button>
				</Link>
			</div>
		</div>
	);
};

Single1.propTypes = {
	match: PropTypes.object
};

//<div classNameName="jumbotron">
//<h1 classNameName="display-4">This will show the demo element: {store.people[params.theid].name}</h1>

// <hr classNameName="my-4" />

// <Link to="/">
// <span classNameName="btn btn-primary btn-lg" href="#" role="button">
//Back home
//</span>
// </Link>
//</div>
