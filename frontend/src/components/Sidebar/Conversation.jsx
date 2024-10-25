import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const { onlineUsers } = useSocketContext();
    
    console.log("Online Users:", onlineUsers); // Debugging line

    const isSelected = selectedConversation?._id === conversation._id;
    const isOnline = onlineUsers.includes(conversation._id);

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                    padding: '8px',
                    borderRadius: '8px',
                    color: "blue",
                    cursor: 'pointer',
                    backgroundColor: isSelected ? '#38bdf8' : 'transparent',
                    transition: 'background-color 0.3s',
                }}
                onClick={() => setSelectedConversation(conversation)}
            >
                {/* Avatar with online indicator */}
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <img
                        src={conversation.profilePic}
                        alt="user avatar"
                        style={{ width: '48px', height: '48px', borderRadius: '50%' }}
                    />
                    {isOnline && (
                        <span
                            style={{
                                position: 'absolute',
                                width: '10px',
                                height: '10px',
                                backgroundColor: 'green',
                                borderRadius: '50%',
                                bottom: '0',
                                right: '0',
                                border: '2px solid white',
                            }}
                        ></span>
                    )}
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <p
                            style={{
                                fontWeight: 'bold',
                                color: '#002244',
                            }}
                        >
                            {conversation.fullname}
                        </p>
                        <span style={{ fontSize: '24px' }}>{emoji}</span>
                    </div>
                </div>
            </div>

            {!lastIdx && <div style={{ margin: '0', padding: '0', height: '1px', backgroundColor: '#002244', width: '100%' }} />}
        </>
    );
};

export default Conversation;
