import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// Cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	// Inline styles
	const containerStyle = {
		minWidth: '450px',
		display: 'flex',
		flexDirection: 'column',
	};
	const headerStyle = {
		backgroundColor: '#64748b', // Equivalent to "bg-slate-500"
		padding: '8px 16px',
		marginBottom: '8px',
		color: '#1f2937', // Equivalent to "text-gray-900"
		fontWeight: 'bold',
	};

	return (
		<div style={containerStyle}>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div style={headerStyle}>
						<span>To:</span>{" "}
						<span>{selectedConversation.fullname}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessageContainer;

const NoChatSelected = () => {
	const {authUser}=useAuthContext();
	// Inline styles
	const noChatContainerStyle = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
	};
	const textContainerStyle = {
		padding: '16px',
		textAlign: 'center',
		fontSize: '1.125rem', // Equivalent to "sm:text-lg md:text-xl"
		color: '#002244', // Equivalent to "text-gray-200"
		fontWeight: '600',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '8px',
	};
	const iconStyle = {
		fontSize: '48px', // Equivalent to "md:text-6xl"
		textAlign: 'center',
	};

	return (
	
		<div style={noChatContainerStyle}>
			<div style={textContainerStyle}>
				<p>Welcome 👋 {authUser.user.fullname} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages style={iconStyle} />
			</div>
		</div>
	);
};
