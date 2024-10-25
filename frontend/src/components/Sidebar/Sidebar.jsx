import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
	return (
		<div
			style={{
				borderRight: '1px solid #64748b', // Tailwind's border-slate-500 color
				padding: '16px', // Tailwind's p-4
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<SearchInput />
			<div
				style={{
					borderBottom: '1px solid #002244', // Tailwind's divider color
					padding: '0 12px' // Tailwind's px-3
				}}
			></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};

export default Sidebar;
