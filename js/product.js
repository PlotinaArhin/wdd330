import { getParam } from "./utils.mjs";
import ProductData from "./productdata.mjs";
import ProductDetails from "./productdetails.mjs";

const dataSource = new ProductData("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();