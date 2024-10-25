const MessageSkeleton = () => {
	return (
		<>
			<div
				style={{
					display: 'flex',
					gap: '12px', // Tailwind's gap-3
					alignItems: 'center'
				}}
			>
				<div
					className='skeleton'
					style={{
						width: '40px', // Tailwind's w-10
						height: '40px', // Tailwind's h-10
						borderRadius: '9999px', // Fully rounded
						flexShrink: '0' // Tailwind's shrink-0
					}}
				></div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}> {/* Tailwind's flex-col and gap-1 */}
					<div
						className='skeleton'
						style={{
							height: '16px', // Tailwind's h-4
							width: '160px' // Tailwind's w-40
						}}
					></div>
					<div
						className='skeleton'
						style={{
							height: '16px', // Tailwind's h-4
							width: '160px' // Tailwind's w-40
						}}
					></div>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					gap: '12px', // Tailwind's gap-3
					alignItems: 'center',
					justifyContent: 'flex-end' // Tailwind's justify-end
				}}
			>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}> {/* Tailwind's flex-col and gap-1 */}
					<div
						className='skeleton'
						style={{
							height: '16px', // Tailwind's h-4
							width: '160px' // Tailwind's w-40
						}}
					></div>
				</div>
				<div
					className='skeleton'
					style={{
						width: '40px', // Tailwind's w-10
						height: '40px', // Tailwind's h-10
						borderRadius: '9999px', // Fully rounded
						flexShrink: '0' // Tailwind's shrink-0
					}}
				></div>
			</div>
		</>
	);
};

export default MessageSkeleton;
