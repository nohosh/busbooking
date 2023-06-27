import React, { memo } from 'react';
import { SEAT, SeatStatus } from '../Enum';

const Seat = memo(
	({ isSelected, type, status, layout, row, col, onChange, number }) => {
		return (
			<div
				onClick={
					status === SeatStatus.Reserved
						? null
						: () => onChange(layout, row, col)
				}
				className={
					type === SEAT.NoSeat
						? 'no-seat'
						: status === SeatStatus.Reserved
						? 'seat seat-r'
						: `seat seat-v ${isSelected ? 'seat-selected' : ''}`
				}
			>
				<span className="seat-num">{number}</span>
			</div>
		);
	}
);

export default Seat;
