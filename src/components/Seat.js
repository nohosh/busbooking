import React, { memo } from 'react';

const Seat = memo(({ isSelected, layout, row, col, onChange }) => {
	return (
		<div onClick={() => onChange(layout, row, col)}>
			{isSelected ? 'true' : 'false'}
		</div>
	);
});

export default Seat;
