export default Vue.component("Main", {
	template: "<div>Main: {{ data }}</div>",
	data() {
		return {
			data: null
		}
	},
	mounted() {
		this.$store.subscribe(mutation => {
			if(mutation.type === "main") {
				this.data = mutation.payload;
			}
		})
	}
});