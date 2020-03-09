var data = require("./../data");
var Database = require("./../Database");
var database = new Database(data);

module.exports = {
	get(request, response) {
		response.send({
			type: "products",
			data: database.get("products")
		})
	},
	id: {
		get(request, response) {
			response.send({
				type: "product",
				data: database.find("products", request.params.id)
			})
		}
	}
}