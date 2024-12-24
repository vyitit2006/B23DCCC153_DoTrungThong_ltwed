import { configureStore } from "@reduxjs/toolkit";
import cartslice from "../component/Dashboard/cart/cartslice";
import productsSlice from "./productsSlice"; // Thêm import

export default configureStore({
    reducer: {
        cart: cartslice,
        products: productsSlice, // Thêm reducer sản phẩm
    }
});
