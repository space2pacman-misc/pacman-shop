import Main from "./components/Main.js";
import Products from "./components/Products.js";
import Product from "./components/Product.js";

var routes =  [
	{
		path: "/",
		component: Main
	},
	{
		path: "/products",
		component: Products
	},
	{
		path: "/product/:id",
		component: Product
	}
]

export default new VueRouter({ 
	routes
})