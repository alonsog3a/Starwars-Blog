const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			people: [], //Primer paso. Definimos nuestros arreglos dentro de Store para guardar nuesta informacion.People y Planets
			planets: []
		},
		actions: {
			//Segundo paso. Defino mi funcion para traer la informacion de la API y enviarla a mi arreglo del primer paso.
			getPeople: () => {
				fetch("https://swapi.dev/api/people/")
					.then(res => res.json())
					.then(data => {
						console.log(data);
						setStore({ people: data.results });
					})
					.catch(err => console.error(err));
			},

			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(datos => {
						console.log(datos);
						setStore({ planets: datos.results });
					})
					.catch(err => console.error(err));
			},

			addFavorite: name => {
				const store = getStore();

				setStore({ favorites: [...store.favorites, name] });
			},

			deletefavorite: index => {
				const store = getStore();
				store.favorites.splice(index, 1);
				setStore({ favorites: store.favorites });
				console.log("removidos:", store.favorites);
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
