import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top ">
			<Link to="/">
				<img
					src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo.png"
					alt="start wars"
					width="125"
					height="50"
				/>
			</Link>
			<div className="ml-auto">
				<div className="btn-group dropleft">
					<button
						className="btn btn-info dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						{`Favorites ${store.favorites.length}`}
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{store.favorites.map((item, index) => {
							return (
								<a className="dropdown-item" key={index} href="#">
									{item}
									<i
										className="far fa-trash-alt ml-auto"
										onClick={() => actions.deletefavorite(item)}
									/>
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
};
