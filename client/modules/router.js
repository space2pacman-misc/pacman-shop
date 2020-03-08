import Main from "./components/Main.js";
import Products from "./components/Products.js";

var routes =  [
	{
		path: "/",
		component: Main
	},
	{
		path: "/products",
		component: Products
	}
]

export default new VueRouter({ 
	routes
})