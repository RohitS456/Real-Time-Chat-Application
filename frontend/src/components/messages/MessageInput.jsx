import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	// Inline styles
	const formStyle = {
		padding: '0 16px',
		margin: '12px 0',
	};
	const inputContainerStyle = {
		width: '100%',
		position: 'relative',
	};
	const inputStyle = {
		border: '1px solid #4b5563', // Equivalent to "border-gray-600"
		fontSize: '0.875rem', // Equivalent to "text-sm"
		borderRadius: '8px',
		width: '100%',
		padding: '8px 10px',
		backgroundColor: '#374151', // Equivalent to "bg-gray-700"
		color: 'white',
		boxSizing: 'border-box',
	};
	const buttonStyle = {
		position: 'absolute',
		color:"white",
		top: '50%',
		right: '12px',
		transform: 'translateY(-50%)',
		display: 'flex',
		alignItems: 'center',
	};

	return (
		<form style={formStyle} onSubmit={handleSubmit}>
			<div style={inputContainerStyle}>
				<input
					type="text"
					style={inputStyle}
					placeholder="Send a message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type="submit" style={buttonStyle}>
					{loading ? <div style={{ width: '16px', height: '16px' }} className="loading loading-spinner"></div> : <BsSend />}
				</button>
			</div>
		</form>
	);
};

export default MessageInput;
