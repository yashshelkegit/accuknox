import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../features/WidgetSlice";

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
			{/* <h3 className="text-lg font-semibold text-gray-700">
				{category.category}
			</h3> */}
            Add Widget
		</div>
	);
};

export default CategoryButton;
