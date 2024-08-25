import React from "react";
import { useDispatch } from "react-redux";
import { removeWidget } from "../features/WidgetSlice";
import { AiOutlineClose } from "react-icons/ai";

const Widget = ({ widget, categoryId }) => {
	const dispatch = useDispatch();

	return (
		<div className="bg-white h-48 p-5 rounded-lg shadow-md border border-gray-200">
			<div className="flex justify-between items-center mb-4">
				<h3 className="text-lg capitalize font-semibold text-gray-700">{widget.name}</h3>
				<button
					onClick={() =>
						dispatch(removeWidget({ categoryId, widgetId: widget.id }))
					}
					className="text-red-800 font-bold"
				>
					<AiOutlineClose size={20} />
				</button>
			</div>
			<p className="text-gray-600">{widget.text}</p>
		</div>
	);
};

export default Widget;
