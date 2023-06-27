import React, { useCallback, useState } from 'react';
import Seat from '../components/Seat';
import BUS_LAYOUT from '../data.json';
function SeatLayout() {
	const [layouts, setLayouts] = useState(BUS_LAYOUT);

	const onChange = useCallback((layout, row, col, v) => {
		const prev = layouts;
		let curr = prev[layout].layout[row][col];
		let isSelected = curr.isSelected || false;
		isSelected ? (curr.isSelected = false) : (curr.isSelected = true);
		setLayouts([...prev]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	// return <pre>{JSON.stringify(layouts, null, 2)}</pre>;
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
		</div>
	);
}

export default SeatLayout;
