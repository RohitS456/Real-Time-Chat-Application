import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";


const Home = () => {
	return (
		<div
			style={{
				display: 'flex',
				height: '550px', // Set a default height of 550px
				borderRadius: '0.5rem', // Tailwind's rounded-lg
				overflow: 'hidden',
				color:"blue",
				backgroundColor: '#cbd5e1', // Tailwind's bg-gray-400
				backgroundClip: 'padding-box', // Tailwind's bg-clip-padding
				backdropFilter: 'blur(10px)', // Tailwind's backdrop-blur-lg
				opacity: '1' // Set opacity to 1 for visibility
			}}
		>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};

export default Home;
