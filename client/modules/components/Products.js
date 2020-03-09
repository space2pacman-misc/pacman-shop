export default Vue.component("Products", {
	template: "#products",
	data() {
		return {
			products: {}
		}
	},
	mounted() {
		this.$store.subscribe(mutation => {
			if(mutation.type === "products") {
				this.products = mutation.payload;
			}
		})
	}
})