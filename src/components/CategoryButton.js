import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../features/WidgetSlice";
import { FaPlus } from "react-icons/fa";

const CategoryButton = ({ category, onOpenSidebar }) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(setSelectedCategory(category.id));
		onOpenSidebar();
	};

	return (
		<div
			onClick={handleClick}
			className="bg-white h-48 p-5 rounded-lg shadow-md border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50"
		>
			<button className="border flex items-center gap-2 px-3 rounded">
				<FaPlus />
				Add Widget
			</button>
		</div>
	);
};

export default CategoryButton;
