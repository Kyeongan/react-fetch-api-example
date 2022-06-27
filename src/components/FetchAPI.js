import React, { useState, useEffect } from "react";

export default function FetchAPI() {
	const URL = "https://api.github.com/users/kyeongan";
	const [data, setData] = useState();

	useEffect(() => {
		getFollows();
	}, []);

	function getFollows() {
		fetch(URL)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setData(data);
			});
	}

	return (
		<div className="App">
			{data ? (
				<div>
					<header className="App-header">
						<h2>GitHub User Data</h2>
					</header>
					<img src={data.avatar_url} width="100" />
					<h5 className="info-item"> ID: {data.id}</h5>
					<h5 className="info-item">{data.name}</h5>
					<h5 className="info-item">{data.location}</h5>
					<h5 className="info-item">{data.blog}</h5>
					<h5 className="info-item">{data.company}</h5>
				</div>
			) : (
				<div>no data available</div>
			)}
		</div>
	);
}
