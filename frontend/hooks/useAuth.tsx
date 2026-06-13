import { useContext } from "react";
import { AuthContext } from "app/contexts/authContext";

export function useAuth() {
    const context = useContext(AuthContext);

    return context
}