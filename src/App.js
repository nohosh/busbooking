import { useMemo, useState } from 'react';
import './App.css';
import Passenger from './views/Passenger';
import SeatLayout from './views/SeatLayout';
import { SeatContext } from './context/seatContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	const [selectedSeat, setSelectedSeat] = useState(new Set());
	const [passengers, setPassengers] = useState([]);

	const seatValue = useMemo(
		() => ({ selectedSeat, setSelectedSeat, passengers, setPassengers }),
		[selectedSeat, setSelectedSeat, passengers, setPassengers]
	);

	return (
		<BrowserRouter>
			<h1 className="heading">Bus bookings.com</h1>
			<SeatContext.Provider value={seatValue}>
				<Routes>
					<Route path="/" exact element={<Passenger />} />
					<Route path="/selectseat" element={<SeatLayout />} />
				</Routes>
			</SeatContext.Provider>
		</BrowserRouter>
	);
}

export default App;
