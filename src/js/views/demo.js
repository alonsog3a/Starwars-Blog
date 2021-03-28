import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="header">
				<h1 className="personajes">Characters</h1>
			</div>
			<div className="row">
				{store.people.map((item, index) => {
					let trueFavorite = store.favorites.includes(item.name);
					return (
						<div className="carta" key={index}>
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
											<strong>Gender:&nbsp;</strong>
											{item.gender}
										</p>
										<p className="card-text">
											<strong>Hair Color:&nbsp;</strong>
											{item.hair_color}
										</p>
										<p className="card-text">
											<strong>Eye-Color:&nbsp;</strong>
											{item.eye_color}
										</p>

										<Link to={"/single/" + index}>
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

//<ul className="list-group">
//{store.demo.map((item, index) => {
//return (
//<li
//key={index}
//className="list-group-item d-flex justify-content-between"
//style={{ background: item.background }}>
//<Link to={"/single/" + index}>
//<span>Link to: {item.title}</span>
//</Link>
//{// Conditional render example
// Check to see if the background is orange, if so, display the message
//item.background === "orange" ? (
//<p style={{ color: item.initial }}>
//Check store/flux.js scroll to the actions to see the code
//</p>
//) : null}
//<button
//className="btn btn-success"
//onClick={() => actions.changeColor(index, "orange")}>
//Change Color
//</button>
//</li>
//);
//})}
//</ul>
//<br />
//<Link to="/">
//<button className="btn btn-primary">Back home</button>
//</Link>
