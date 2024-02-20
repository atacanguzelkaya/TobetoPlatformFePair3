import {createSlice} from "@reduxjs/toolkit";
import { CourseModel } from "../../pages/Platform/MyCourses/MyCourses";

interface CartItem {
	course: CourseModel;
	quantity: number;
}
const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cartItems: JSON.parse(localStorage.getItem("cart") || "[]") || [],
	},
	reducers: {
		addToCart: (state, action) => {
			let existingItem = state.cartItems.find(
				(i: CartItem) => i.course.id == action.payload.course.id,
			);

			if (existingItem) {
				existingItem.quantity++;
			} else {
				state.cartItems.push({course: action.payload.course, quantity: 1});
			}
			localStorage.setItem("cart", JSON.stringify(state.cartItems));
		},
		removeFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(i: any) => i.course.id !== action.payload.course.id,
			);
			localStorage.setItem("cart", JSON.stringify(state.cartItems));
		},
		clearCart: state => {
			state.cartItems = [];
			localStorage.setItem("cart", JSON.stringify(state.cartItems));
		},
	},
});

export const cartReducer = cartSlice.reducer;
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;