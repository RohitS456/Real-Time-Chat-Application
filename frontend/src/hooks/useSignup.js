import { useState } from "react";
import toast from "react-hot-toast"; 
import { useAuthContext } from "/src/context/AuthContext.jsx";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({ fullname, username, password, confirmPassword, gender }) => {
        console.log("Signup inputs:", { fullname, username, password, confirmPassword, gender });

        const isValid = handleInputErrors({ fullname, username, password, confirmPassword, gender });
        if (!isValid) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullname, username, password, confirmPassword, gender }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "An unknown error occurred");
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
            toast.success("Sign Up successful");
        } catch (error) {
            // Log error information 
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};

export default useSignup;

function handleInputErrors({ fullname, username, password, confirmPassword, gender }) {
   if (!fullname || !username || !password || !confirmPassword || !gender ) {
        toast.error("All fields are required");
        return false;
   }

    if (password !== confirmPassword) {
        toast.error("Passwords don't match");
        return false;
    }

    return true;
}
