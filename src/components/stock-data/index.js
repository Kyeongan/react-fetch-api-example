import React, { useState } from "react";
import "./index.css";

export default function StockData() {
	const [input, setInput] = useState("5-January-2000");
	const [stock, setStock] = useState();

	const URL = "https://jsonmock.hackerrank.com/api/stocks?date=";

	function callApi() {
		console.log(URL + input);
		fetch(URL + input, { method: "GET" })
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				console.log(json);
				console.log(json.data[0]);
				setStock(json.data[0]);
			});
	}

	function onChange(event) {
		setInput(event.target.value);
	}

	return (
		<div>
			<section className="layout-row align-items-center justify-content-center">
				<input type="text" className="large" placeholder="5-January-2000" onChange={onChange} id="app-input" data-testid="app-input" />
				<button className="" id="submit-button" data-testid="submit-button" onClick={callApi}>
					Search
				</button>
			</section>
			<div>
				{stock ? (
					<ul className="mt-50 slide-up-fade-in styled" id="stock" data-testid="stock-data">
						<li className="py-10">Open: {stock.open}</li>
						<li className="py-10">Close: {stock.close}</li>
						<li className="py-10">High: {stock.high}</li>
						<li className="py-10">Low: {stock.low}</li>
					</ul>
				) : (
					<div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result">
						{!stock && "No Results Found"}
					</div>
				)}
			</div>
		</div>
	);
}
