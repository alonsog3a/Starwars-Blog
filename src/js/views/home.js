import React from "react";
import { Link } from "react-router-dom";

import "../../styles/home.scss";

import { Demo } from "./demo.js";
import { Planets } from "./planets.js";

export const Home = () => (
	<div className="fondo">
		<Demo />
		<Planets />
	</div>
);
