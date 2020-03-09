export default Vue.component("Product", {
	template: "#product",
	data() {
		return {
			product: {}
		}
	},
	mounted() {
		this.$store.subscribe(mutation => {
			if(mutation.type === "product") {
				this.product = mutation.payload;
			}
		})
	}
})