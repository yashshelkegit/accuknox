import React, { useState } from "react";

const Toolbar = ({ onAddWidgetClick }) => {
	const [filter, setFilter] = useState("all");

	return (
		<div className="bg-gray-100 p-4 flex justify-end gap-4 items-center shadow-sm border-b border-gray-200">
			<button
				onClick={onAddWidgetClick}
				className="px-5 py-2 rounded-md border border-gray-500 text-gray-500 bg-gray-200"
			>
				Add Widget
			</button>
			<select
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
				className="p-2 rounded-md border border-gray-300"
			>
				<option value="all">All Time</option>
				<option value="2days">Last 2 Days</option>
				<option value="week">Last Week</option>
				<option value="month">Last Month</option>
			</select>
		</div>
	);
};

export default Toolbar;
