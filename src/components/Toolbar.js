import React, { useState } from "react";
import { FaBars, FaPlus, FaTimes } from "react-icons/fa";

const Toolbar = ({ onAddWidgetClick, onSearch }) => {
    const [isOpen, setIsOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }
	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
		onSearch(e.target.value);
	};

	return (
		<header className="fixed  w-full bg-blue-950 text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-2xl font-bold">CNAPP Dashboard</h1>

				<div className="hidden md:flex gap-4">
					<div className="flex items-center">
						<input
							type="text"
							placeholder="Search..."
							value={searchQuery}
							onChange={handleSearchChange}
							className="p-1 rounded text-black"
						/>
					</div>
					<button
						onClick={onAddWidgetClick}
						className="px-5 flex items-center gap-2 rounded-md border border-gray-500 text-gray-700 bg-gray-100"
					>
						Add Widget <FaPlus />
					</button>
				</div>
				<button className="md:hidden" onClick={handleOpen}>
					{isOpen ? <FaTimes size={24}/> : <FaBars size={24} />}
				</button>
			</div>
			{isOpen ? (
				<div className="grid items-center gap-3 py-10">
						<input
							type="text"
							placeholder="Search..."
							value={searchQuery}
							onChange={handleSearchChange}
							className="p-2 rounded text-black"
						/>
					<button
						onClick={onAddWidgetClick}
						className="px-5 py-2 flex items-center gap-2 rounded-md border border-gray-500 text-gray-700 bg-gray-100"
					>
						Add Widget <FaPlus />
					</button>
				</div>
			) : (
				""
			)}
		</header>
	);
};

export default Toolbar;
