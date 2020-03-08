import Home from "./components/Home.js";
import Products from "./components/Products.js";

var routes =  [
	{
		path: "/",
		component: Home
	},
	{
		path: "/products",
		component: Products
	}
]

export default new VueRouter({ 
	routes,
	mode: "history"
})