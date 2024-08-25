import {configureStore} from "@reduxjs/toolkit";
import dashboardReducer from "./features/WidgetSlice";

const store = configureStore({
	reducer: {
		dashboard: dashboardReducer,
	},
});

export default store;