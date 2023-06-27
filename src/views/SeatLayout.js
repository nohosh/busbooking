import React, { useCallback, useState } from 'react';
import Seat from '../components/Seat';

const data = [
	{
		name: 'bottom',
		arr: [
			[{ value: true }, { value: true }, { value: true }],
			[{ value: true }, { value: true }, { value: true }],
			[{ value: true }, { value: true }, { value: true }],
		],
	},
	{
		name: 'top',
		arr: [
			[{ value: true }, { value: true }, { value: true }],
			[{ value: true }, { value: true }, { value: true }],
			[{ value: true }, { value: true }, { value: true }],
		],
	},
];
function SeatLayout() {
	const [layouts, setLayouts] = useState(data);

	const onChange = useCallback((layout, row, col, v) => {
		const prev = layouts;
		prev[layout].arr[row][col].value = !prev[layout].arr[row][col].value;

		setLayouts([...prev]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	// return <pre>{JSON.stringify(layouts, null, 2)}</pre>;
	return (
		<div className="seat-selection-container">
			{layouts.map((layout, L) => (
				<div key={L}>
					{layout.arr.map((row, R) => (
						<div key={R}>
							{row.map((seat, C) => (
								<Seat
									key={seat.id}
									layout={L}
									row={R}
									col={C}
									isSelected={seat.value}
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
