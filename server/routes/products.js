module.exports = {
	get(request, response) {
		response.send({
			type: "products",
			data: [{ caption: "apple", price: 10 }]
		})
	},
	id: {
		get(request, response) {
			response.send({
				type: "product",
				data: { caption: "apple", price: 10 }
			})
		}
	}
}