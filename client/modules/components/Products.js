export default Vue.component("Products", {
	template: "<div>Products: {{ products }}</div>",
	data() {
		return {
			products: null
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