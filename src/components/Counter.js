import React, { useState } from "react";

export default function Counter() {
	const [counter, setCounter] = useState(0);

	const click = (type) => {
		type === "increment" ? setCounter(counter + 1) : setCounter(counter - 1);
	};

	return (
		<div>
			Counter
			<section className="layout-row align-items-center justify-content-center">
				<button onClick={() => click("increment")}>+1</button>
				<button onClick={() => click("decrement)")}>-1</button>
			</section>
			<section className="layout-row align-items-center justify-content-center">
				<h5>{counter}</h5>
			</section>
		</div>
	);
}
