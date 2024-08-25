import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Toolbar from "./components/Toolbar";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState(""); 

	const handleOpenSidebar = () => {
		setSidebarOpen(true);
	};

	const handleCloseSidebar = () => {
		setSidebarOpen(false);
	};

	const handleSearch = (query) => {
		setSearchQuery(query);
	};

	return (
		<Provider store={store}>
			<div className="flex flex-col ">
				<Toolbar onAddWidgetClick={handleOpenSidebar} onSearch={handleSearch} />
				<div className="flex bg-blue-100 flex-1 overflow-hidden">
					<Dashboard
						onOpenSidebar={handleOpenSidebar}
						searchQuery={searchQuery}
					/>
					{sidebarOpen && <Sidebar onClose={handleCloseSidebar} />}
				</div>
			</div>
		</Provider>
	);
}

export default App;
