import React, { memo } from 'react';
import { SEAT, SeatStatus } from '../Enum';

const Seat = memo(
	({ isSelected, type, status, layout, row, col, onChange }) => {
		return (
			<div
				onClick={() => onChange(layout, row, col)}
				className={
					type === SEAT.NoSeat
						? 'no-seat'
						: status === SeatStatus.Reserved
						? 'seat seat-r'
						: `seat seat-v ${isSelected ? 'seat-selected' : ''}`
				}
			></div>
		);
	}
);

export default Seat;
