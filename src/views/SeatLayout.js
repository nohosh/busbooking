import React, { useCallback, useContext, useState } from 'react';
import Seat from '../components/Seat';
import BUS_LAYOUT from '../data.json';
import { SeatContext } from '../context/seatContext';
function SeatLayout() {
	const [layouts, setLayouts] = useState(BUS_LAYOUT);
	const { passengers, selectedSeat, setSelectedSeat } = useContext(SeatContext);

	const onChange = useCallback((layout, row, col, v) => {
		const prev = layouts;
		let curr = prev[layout].layout[row][col];
		let isSelected = curr.isSelected || false;
		if (isSelected) {
			curr.isSelected = false;
			setSelectedSeat((prev) => {
				prev.delete(curr.id);
				return new Set(prev);
			});
		} else {
			curr.isSelected = true;
			setSelectedSeat((prev) => new Set(prev.add(curr.id)));
		}
		setLayouts([...prev]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const checkOut = () => {
		if (passengers.length !== selectedSeat.size) return;
		console.log('Passengers', passengers, 'Seats', selectedSeat);
		const tickets = [];
		let seats = Array.from(selectedSeat);
		for (let passenger of passengers) {
			passenger.seat = seats.pop();
			tickets.push(passenger);
		}
		console.log('===>', tickets);
		alert(JSON.stringify(tickets));
	};
	return (
		<div className="seat-selection-container">
			{layouts.map((layout, L) => (
				<div key={L} className="layout">
					{layout.layout.map((row, R) => (
						<div className="seat-row" key={R}>
							{row.map((seat, C) => (
								<Seat
									key={seat.id}
									layout={L}
									row={R}
									col={C}
									type={seat.type}
									status={seat.status}
									isSelected={
										seat['isSelected'] === undefined
											? false
											: seat['isSelected']
									}
									onChange={onChange}
								/>
							))}
						</div>
					))}
				</div>
			))}
			{selectedSeat.size > 0 && (
				<button
					onClick={checkOut}
					type="button"
					disabled={selectedSeat.size > passengers.length}
				>
					{selectedSeat.size > passengers.length
						? `Bummer: ${
								selectedSeat.size - passengers.length
						  } extra seat selected`
						: 'Pay'}
				</button>
			)}
		</div>
	);
}

export default SeatLayout;
