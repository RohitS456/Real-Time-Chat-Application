import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
    const { loading, logout } = useLogout();

    return (
        <div style={{ marginTop: 'auto' }}>
            {!loading ? (
                <BiLogOut
                    style={{
                        width: '24px',
                        height: '24px',
                        color: '#002244',
                        cursor: 'pointer',
                    }}
                    onClick={logout}
                />
            ) : (
                <span
                    style={{
                        display: 'inline-block',
                        width: '24px',
                        height: '24px',
                        border: '4px solid rgba(0, 0, 0, 0.1)',
                        borderRadius: '50%',
                        borderTopColor: '#3498db',
                        animation: 'spin 1s linear infinite',
                    }}
                ></span>
            )}
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

export default LogoutButton;
