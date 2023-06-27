import React, { useContext } from 'react';
import { SeatContext } from '../context/seatContext';
import { Link } from 'react-router-dom';

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
						<div key={i}>
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
							<button
								className="btn-delete"
								onClick={(e) => removePassenger(e, i)}
							>
								🗑️
							</button>
						</div>
					);
				})}
				<div className="btn-container">
					<button className="btn-add" type="button" onClick={addPassenger}>
						Click to add passenger
					</button>
					{passengers.length > 0 && (
						<Link to="/selectseat">
							<button type="button" className="btn-next">
								Go to seat selection
							</button>
						</Link>
					)}
				</div>
			</form>
		</div>
	);
}

export default Passenger;
