import React from "react";

const Header = () => {

	return (
		<header className="bg-gray-800 text-white p-4 flex justify-between items-center">
			<h1 className="text-2xl font-bold">Dashboard</h1>
			<div className="flex items-center">
				<input
					type="text"
					placeholder="Search..."
					className="mr-4 p-2 rounded text-black"
				/>
			</div>
		</header>
	);
};

export default Header;
