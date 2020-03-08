export default new Vuex.Store({
	state: {
		main: null,
		products: null
	},
	mutations: {
		products(state, data) {
			state.products = data;
 		},
 		main(state, data) {
 			state.main = data;
 		}
	}
})