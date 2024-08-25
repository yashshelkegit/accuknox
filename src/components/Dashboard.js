import React from "react";
import { useSelector } from "react-redux";
import Widget from "./Widget";
import CategoryButton from "./CategoryButton";

const Dashboard = ({ onOpenSidebar, searchQuery }) => {
	const { dashboard } = useSelector((state) => state.dashboard);

	return (
		<div className="container mx-auto mt-24 mb-10 rounded-lg flex-1 p-6  bg-white">
			{dashboard.map((category) => {
				const filteredWidgets = category.widgets.filter(
					(widget) =>
						widget.visible &&
						(widget.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
							widget.text.toLowerCase().includes(searchQuery.toLowerCase().trim()))
				);

				if (filteredWidgets.length === 0) {
					return null;
				}

				return (
					<div key={category.id} className="mb-6">
						<h2 className="text-lg capitalize font-bold text-blue-800 mb-3">
							{category.category}
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{filteredWidgets.map((widget) => (
								<Widget
									key={widget.id}
									widget={widget}
									categoryId={category.id}
								/>
							))}
							<CategoryButton
								category={category}
								onOpenSidebar={onOpenSidebar}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Dashboard;
