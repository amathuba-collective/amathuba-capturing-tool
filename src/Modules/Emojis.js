import React from "react";

export default function Emojis({ Emoji, span}) {
	return (
		<button className='bg-transparent border-0 fs-1 d-flex flex-column align-items-center'>
			{Emoji}
			<span className='fs-5'>{span}</span>
		</button>
	);
}
