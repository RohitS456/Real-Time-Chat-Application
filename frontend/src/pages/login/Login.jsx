import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: '384px', margin: '0 auto' }}>
			<div style={{ width: '100%', padding: '24px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgba(203, 213, 225, 0.1)', backdropFilter: 'blur(10px)' }}>
				<h1 style={{ fontSize: '1.875rem', fontWeight: '600', textAlign: 'center', color: '#D1D5DB' }}>
					Login <span style={{ color: '#3B82F6' }}> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label style={{ padding: '8px', display: 'block' }}>
							<span style={{ fontSize: '1rem', color: 'White' }}>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							style={{ width: '100%', height: '40px', border: '1px solid #E5E7EB', borderRadius: '0.375rem', padding: '0 8px' }}
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label style={{ display: 'block' }}>
							<span style={{ fontSize: '1rem', color: 'White' }}>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							style={{ width: '100%', height: '40px', border: '1px solid #E5E7EB', borderRadius: '0.375rem', padding: '0 8px' }}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<Link
						to='/signup'
						style={{ fontSize: '0.875rem', color: '#3B82F6', marginTop: '8px', textDecoration: 'underline', cursor: 'pointer', display: 'inline-block' }}
					>
						{"Don't"} have an account?
					</Link>

					<div>
						<button
							style={{ width: '100%', backgroundColor: loading ? '#D1D5DB' : '#3B82F6', color: 'white', padding: '10px', border: 'none', borderRadius: '0.375rem', marginTop: '8px', cursor: loading ? 'not-allowed' : 'pointer' }}
							disabled={loading}
						>
							{loading ? <span className='loading loading-spinner'></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
