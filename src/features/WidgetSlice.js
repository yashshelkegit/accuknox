import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	selectedCategory: 1,
	dashboard: [
		{
			id: 1,
			category: "category 1",
			widgets: [
				{ id: 1, name: "name1", text: "text 1", visible: true },
				{ id: 2, name: "name1", text: "text 1", visible: true },
			],
		},
		{
			id: 2,
			category: "category 2",
			widgets: [
				{ id: 1, name: "name1", text: "text 1", visible: true },
				{ id: 2, name: "name1", text: "text 1", visible: true },
			],
		},
		{
			id: 3,
			category: "category 3",
			widgets: [
				{ id: 1, name: "name1", text: "text 1", visible: true },
				{ id: 2, name: "name1", text: "text 1", visible: true },
			],
		},
		{
			id: 4,
			category: "category 4",
			widgets: [
				{ id: 1, name: "name1", text: "text 1", visible: true },
				{ id: 2, name: "name1", text: "text 1", visible: true },
			],
		},
		{
			id: 5,
			category: "category 5",
			widgets: [
				{ id: 1, name: "name1", text: "text 1", visible: true },
				{ id: 2, name: "name1", text: "text 1", visible: true },
			],
		},
	],
};

const dashboardSlice = createSlice({
	name: "dashboard",
	initialState,
	reducers: {
		addWidget: (state, action) => {
			const { widget } = action.payload;
			const category = state.dashboard.find(
				(cat) => cat.id === state.selectedCategory
			);
			if (category) {
				const newWidgetId =
					Math.max(...category.widgets.map((w) => w.id), 0) + 1;
				category.widgets.push({ ...widget, id: newWidgetId, visible: true });
			}
		},
		removeWidget: (state, action) => {
			const { categoryId, widgetId } = action.payload;
			const category = state.dashboard.find((cat) => cat.id === categoryId);
			if (category) {
				category.widgets = category.widgets.filter((w) => w.id !== widgetId);
			}
		},
		toggleWidget: (state, action) => {
			const { widgetId } = action.payload;
			const category = state.dashboard.find(
				(cat) => cat.id === state.selectedCategory
			);
			if (category) {
				const widget = category.widgets.find((w) => w.id === widgetId);
				if (widget) {
					widget.visible = !widget.visible;
				}
			}
		},
		setSelectedCategory: (state, action) => {
			state.selectedCategory = action.payload;
		},
	},
});

export const { addWidget, removeWidget, setSelectedCategory, toggleWidget } =
	dashboardSlice.actions;
export default dashboardSlice.reducer;
