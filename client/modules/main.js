import router from "./router.js";

var app = new Vue({
	el: "#app",
	router,
	data: {
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
	}
})