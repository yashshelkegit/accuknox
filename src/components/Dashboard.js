import React from "react";
import { useSelector } from "react-redux";
import Widget from "./Widget";
import CategoryButton from "./CategoryButton";

const Dashboard = ({ onOpenSidebar }) => {
	const { dashboard } = useSelector((state) => state.dashboard);

	return (
		<div className="flex-1 p-6 overflow-auto bg-gray-50">
			{dashboard.map((category) => (
				<div key={category.id} className="mb-10">
					<h2 className="text-xl capitalize font-semibold text-gray-800 mb-6">
						{category.category}
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{category.widgets
							.filter((widget) => widget.visible)
							.map((widget) => (
                                <Widget
                                key={widget.id}
                                widget={widget}
                                categoryId={category.id}
								/>
							))}
                            <CategoryButton category={category} onOpenSidebar={onOpenSidebar} />
					</div>
				</div>
			))}
		</div>
	);
};

export default Dashboard;
