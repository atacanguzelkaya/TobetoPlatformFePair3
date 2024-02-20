import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./auth/authSlice";
import {loadingReducer} from "./loading/loadingSlice";
import { abilityReducer } from "./ability/abilitySlice";

const rootReducer = combineReducers({
	auth: authReducer,
	loading: loadingReducer,
	ability: abilityReducer,
});

export const store = configureStore({reducer: rootReducer});
