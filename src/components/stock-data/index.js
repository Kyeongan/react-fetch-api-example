import React, { useState } from "react";
import "./index.css";

export default function StockData() {
	const [input, setInput] = useState();
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
				setStock(json.data[0]);
			});
	}

	return (
		<div>
			<section className="layout-row align-items-center justify-content-center">
				<input type="text" className="large" placeholder="5-January-2000" value={input} onChange={(e) => setInput(e.target.value)} id="app-input" data-testid="app-input" />
				<button className="" id="submit-button" data-testid="submit-button" onClick={callApi}>
					Search
				</button>
			</section>
			<section className="layout-row align-items-center justify-content-center">
				<div>
					{stock ? (
						<ul className="mt-50 slide-up-fade-in styled" id="stock" data-testid="stock-data">
							<li className="py-10">Open: ${stock.open}</li>
							<li className="py-10">Close: ${stock.close}</li>
							<li className="py-10">High: ${stock.high}</li>
							<li className="py-10">Low: ${stock.low}</li>
						</ul>
					) : (
						<div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result">
							<div data-testid="no-result">No Results Found</div>
						</div>
					)}
				</div>
			</section>
		</div>
	);
}
