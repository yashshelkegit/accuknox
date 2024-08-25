import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const handleOpenSidebar = () => {
		setSidebarOpen(true);
	};

	const handleCloseSidebar = () => {
		setSidebarOpen(false);
	};

	return (
		<Provider store={store}>
			<div className="flex flex-col h-screen">
				<Header />
				<Toolbar onAddWidgetClick={handleOpenSidebar} />
				<div className="flex flex-1 overflow-hidden">
					<Dashboard onOpenSidebar={handleOpenSidebar} />
					{sidebarOpen && <Sidebar onClose={handleCloseSidebar} />}
				</div>
			</div>
		</Provider>
	);
}

export default App;
