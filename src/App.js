import React from "react";
import "./App.css";
// import "h8k-components";
import StockData from "./components/stock-data/index.js";
import StockDataNew from "./components/stock-data-2/index.js";
import AddTwoNumbers from "./components/AddTwoNumbers.js";
import FetchAPI from "./components/FetchAPI";
import Counter from "./components/Counter";

const title = "Stock Data";

function App() {
	return (
		<div>
			{/* <h8k-navbar header={title} /> */}
			<StockData />
			<hr />
			<StockDataNew />
			<hr />
			<AddTwoNumbers />
			<hr />
			<FetchAPI />
			<hr />
			<Counter />
		</div>
	);
}

export default App;
