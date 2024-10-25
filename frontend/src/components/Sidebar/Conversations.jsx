import useGetConversations from "../../hooks/useGetConversations.js";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation.jsx";

const Conversations = () => {
    const { loading, conversations } = useGetConversations();
    
    return (
        <div
            style={{
                padding: '8px 0',
                display: 'flex',
                flexDirection: 'column',
				color:"#002244",
                overflow: 'auto',
            }}
        >
            {conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                    lastIdx={idx === conversations.length - 1}
                />
            ))}

            {loading ? (
                <span
                    style={{
                        display: 'inline-block',
                        width: '24px',
                        height: '24px',
                        margin: 'auto',
                        border: '4px solid rgba(0, 0, 0, 0.1)',
                        borderRadius: '50%',
                        borderTopColor: '#002244',
                        animation: 'spin 1s linear infinite',
                    }}
                ></span>
            ) : null}
        </div>
    );
};

// Add CSS animation for the loading spinner
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`, styleSheet.cssRules.length);

export default Conversations;
