import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	addWidget,
	toggleWidget,
	setSelectedCategory,
} from "../features/WidgetSlice";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

const Sidebar = ({ onClose }) => {
	const dispatch = useDispatch();
	const { dashboard, selectedCategory } = useSelector(
		(state) => state.dashboard
	);
	const [newWidget, setNewWidget] = useState({ name: "", text: "" });

	const handleAddWidget = (e) => {
		e.preventDefault();
		dispatch(addWidget({ categoryId: selectedCategory, widget: newWidget }));
		setNewWidget({ name: "", text: "" });
	};

	const handleCategoryChange = (categoryId) => {
		dispatch(setSelectedCategory(categoryId));
	};

	return (
		<div className="fixed inset-y-0 left-0 md:w-2/3 w-full bg-gray-100 p-4 overflow-auto shadow-lg z-50">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-xl font-bold">Add/Manage Widgets</h2>
				<button onClick={onClose}>
					<AiOutlineClose size={24} />
				</button>
			</div>

			<div className="grid grid-cols-3 md:grid-cols-none md:grid-flow-col mb-4 gap-4">
				{dashboard.map((category) => (
					<button
						key={category.id}
						className={`px-4 py-2 rounded ${
							selectedCategory === category.id
								? "bg-blue-500 text-white"
								: "bg-gray-200"
						}`}
						onClick={() => handleCategoryChange(category.id)}
					>
						{category.category}
					</button>
				))}
			</div>

			<form onSubmit={handleAddWidget} className="mb-4">
				<input
					type="text"
					placeholder="Widget Name"
					value={newWidget.name}
					onChange={(e) => setNewWidget({ ...newWidget, name: e.target.value })}
					className="w-full p-2 mb-2 border rounded"
				/>
				<textarea
					placeholder="Widget Text"
					value={newWidget.text}
					onChange={(e) => setNewWidget({ ...newWidget, text: e.target.value })}
					className="w-full p-2 mb-2 border rounded"
				/>
				<button
					type="submit"
					className="w-full bg-green-500 text-white p-2 rounded"
				>
					Add Widget
				</button>
			</form>

			<h3 className="font-bold mb-2">Manage Widgets</h3>
			{dashboard
				.find((cat) => cat.id === selectedCategory)
				?.widgets.map((widget) => (
					<div key={widget.id} className="flex p-3 border bg-gray-200 items-center mb-2">
						<input
							type="checkbox"
							checked={widget.visible}
							onChange={() =>
								dispatch(
									toggleWidget({
										categoryId: selectedCategory,
										widgetId: widget.id,
									})
								)
							}
							className="mr-2"
						/>
						<span>{widget.name}</span>
					</div>
				))}
		</div>
	);
};

export default Sidebar;
