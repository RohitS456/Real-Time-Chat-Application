import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser.user._id;
	const formattedTime = extractTime(message.createdAt);
	const profilePic = fromMe ? authUser.user.profilePic : selectedConversation?.profilePic;

	// Inline styles
	const chatStyle = {
		display: 'flex',
		flexDirection: fromMe ? 'row-reverse' : 'row',
		alignItems: 'center',
		marginBottom: '1rem',
	};
	const imageContainerStyle = {
		width: '40px',
		height: '40px',
		borderRadius: '50%',
		overflow: 'hidden',
		margin: '0 10px',
	};
	const chatBubbleStyle = {
		backgroundColor: fromMe ? '#3b82f6' : '#333', // Equivalent to "bg-blue-500" for fromMe or default dark background
		color: 'white',
		padding: '8px 12px',
		borderRadius: '16px',
		position: 'relative',
		marginBottom: '24px', // Padding for chat bubble bottom
		animation: message.shouldShake ? 'shake 0.3s' : 'none',
	};
	const chatFooterStyle = {
		opacity: 0.5,
		fontSize: '0.75rem',
		display: 'flex',
		gap: '4px',
		alignItems: 'center',
	};

	return (
		<div style={chatStyle}>
			<div style={imageContainerStyle}>
				<img alt="Tailwind CSS chat bubble component" src={profilePic} style={{ width: '100%', height: '100%' }} />
			</div>
			<div style={chatBubbleStyle}>{message.message}</div>
			<div style={chatFooterStyle}>{formattedTime}</div>
		</div>
	);
};

export default Message;
