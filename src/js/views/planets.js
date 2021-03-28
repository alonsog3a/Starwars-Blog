import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="header">
				<h1 className="personajes">Planets</h1>
			</div>
			<div className="row">
				{store.planets.map((item, index) => {
					let trueFavorite = store.favorites.includes(item.name);
					return (
						<div className="carta " key={index}>
							<div className="card">
								<div className="thumbnail">
									<img
										src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
										className="card-img-top"
										alt="..."
									/>
									<div className="caption">
										<h5>{item.name}</h5>
										<p className="card-text">
											<strong>Population:&nbsp;</strong>
											{item.population}
										</p>
										<p className="card-text">
											<strong>Terrain:&nbsp;</strong>
											{item.terrain}
										</p>

										<Link to={"/single1/" + index}>
											<a href="#" className="btn btn-warning">
												Learn More!
											</a>
										</Link>
										<i
											className={trueFavorite ? "fas fa-heart" : "far fa-heart"}
											onClick={() => actions.addFavorite(item.name)}
										/>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
