import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};

	return (
		<form
			onSubmit={handleSubmit}
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: '8px' // Adjust gap as needed
			}}
		>
			<input
				type='text'
				placeholder='Search…'
				style={{
					color:"#002244",
					backgroundColor:"white",
					border: '1px solid #d1d5db', // Tailwind's input-bordered color
					borderRadius: '9999px', // Fully rounded
					padding: '8px 12px', // Adjust padding as needed
					width: '200px' // Adjust width as needed
				}}
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button
				type='submit'
				style={{
					backgroundColor: '#3b82f6', // Tailwind's bg-sky-500 color
					color: '#002244',
					borderRadius: '50%', // Circle button
					width: '40px', // Adjust size as needed
					height: '40px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					border: 'none', // Remove default button border
					cursor: 'pointer'
				}}
			>
				<IoSearchSharp style={{ width: '24px', height: '24px', outline: 'none' }} />
			</button>
		</form>
	);
};

export default SearchInput;
