function Movie_Api(name, id) {
	const rating = fetch(`https://search.imdbot.workers.dev/?q="${name}"`, { method: "POST" }).then(response => response.json())
		.then(json => {
			document.getElementById(id).innerHTML = json["description"][0]["#RATING"]["#ONLYRATING"];
		}, id)
	return rating
}

Movie_Api("encanto", "Encanto");
Movie_Api("Grand Blue", "grand")
Movie_Api("Love, Death & Robots", "love")