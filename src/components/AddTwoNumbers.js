import React, { useState } from "react";

export default function AddTwoNumbers() {
	const [number1, setNumber1] = useState();
	const [number2, setNumber2] = useState();
	const [total, setTotal] = useState(number1 + number2);

	function calculateTotal() {
		setTotal(number1 + number2);
	}

	return (
		<div className="App">
			<h1>Adding Two Numbers</h1>
			<div>
				<input type="text" value={number1} onChange={(e) => setNumber1(+e.target.value)} />
				<input type="number" value={number2} onChange={(e) => setNumber2(+e.target.value)} />
			</div>

			<button onClick={calculateTotal}>Add Them!</button>
			<h2>Total: {total}</h2>
		</div>
	);
}
