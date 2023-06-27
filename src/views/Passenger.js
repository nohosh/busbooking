import React, { useContext } from 'react';
import { SeatContext } from '../context/seatContext';

function Passenger() {
	const { passengers, setPassengers } = useContext(SeatContext);

	const removePassenger = (e, i) => {
		e.preventDefault();
		setPassengers((prev) =>
			prev.filter((itm, idx) => {
				return idx !== i;
			})
		);
	};
	const addPassenger = (e) => {
		e.preventDefault();
		setPassengers((prev) => [...prev, { name: '', age: '' }]);
	};
	const handleChange = (e, i) => {
		let temp = passengers;
		temp[i][e.target.name] = e.target.value;
		setPassengers([...temp]);
	};

	return (
		<div className="passenger-container">
			<form>
				{passengers.map((seat, i) => {
					return (
						<div>
							<input
								type="text"
								placeholder="name"
								name="name"
								onChange={(e) => handleChange(e, i)}
								value={passengers[i].name}
							/>
							<input
								type="number"
								value={passengers[i].age}
								placeholder="age"
								name="age"
								onChange={(e) => handleChange(e, i)}
							/>
							<button onClick={(e) => removePassenger(e, i)}>🗑️</button>
						</div>
					);
				})}
				<button type="button" onClick={addPassenger}>
					Click to add passenger
				</button>
			</form>
		</div>
	);
}

export default Passenger;
