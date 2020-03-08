module.exports = {
	get(request, response) {
		response.send({ type: "main", data: "Hello world" });
	}
}