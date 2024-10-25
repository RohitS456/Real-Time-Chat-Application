const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div style={{ display: 'flex' }}>
			<div style={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
				<label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: selectedGender === "male" ? '#1D4ED8' : '#4B5563' }}>
					<span style={{ fontSize: '1rem',color:"White" }}>Male</span>
					<input
						type='checkbox'
						name="gender"
						style={{ borderColor: '#1F2937' }}
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
					/>
				</label>
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: selectedGender === "female" ? '#1D4ED8' : '#4B5563' }}>
					<span style={{ fontSize: '1rem',color:"white" }}>Female</span>
					<input
						type='checkbox'
						name="gender"
						style={{ borderColor: '#1F2937' }}
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
					/>
				</label>
			</div>
		</div>
	);
};

export default GenderCheckbox;
