import { useMemo, useState } from 'react';
import './App.css';
import Passenger from './views/Passenger';
import SeatLayout from './views/SeatLayout';
import { SeatContext } from './context/seatContext';

function App() {
	const [selectedSeat, setSelectedSeat] = useState(new Set());
	const [passengers, setPassengers] = useState([]);

	const seatValue = useMemo(
		() => ({ selectedSeat, setSelectedSeat, passengers, setPassengers }),
		[selectedSeat, setSelectedSeat, passengers, setPassengers]
	);

	return (
		<SeatContext.Provider value={seatValue}>
			<SeatLayout />
			<Passenger />
		</SeatContext.Provider>
	);
}

export default App;
