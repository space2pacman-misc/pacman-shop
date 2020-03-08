import router from "./router.js";
import store from "./store.js";

var app = new Vue({
	el: "#app",
	router,
	store,
	data: {
		host: "http://localhost:8080",
		nav: [
			{
				caption: "Главная",
				href: "/"
			},
			{
				caption: "Каталог",
				href: "/products"
			}
		]
	},
	methods: {
		send(params) {
			var options = {
				method: params.method || "GET",
				pathname: params.pathname || "",
				body: params.body || null,
				data: params.data || ""
			}

			return fetch(`${this.host}${options.pathname}${this.getData(options.data)}`, {
				method: options.method,
				body: options.body
			}).then(result => result.json());	
		},
		getData(data) {
			return data ? `/${data}` : "";
		}
	},
	watch: {
		$route() {
			this.send({
				method: "GET",
				pathname: this.$route.path
			}).then(result => {
				this.$store.commit(result.type, result.data);
			})
		}
	},
	mounted() {
		this.send({
			method: "GET",
			pathname: this.$route.path
		}).then(result => {
			this.$store.commit(result.type, result.data);
		})
	}
})