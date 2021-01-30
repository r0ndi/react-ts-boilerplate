import { useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import ComponentWithChildrenType from "../../types/ComponentWithChildren.type";
import UserType from "../../types/User.type";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }: ComponentWithChildrenType) => {
    const [user, setUser] = useState<UserType | null>(null);

    useEffect(() => {
        (async () => {
            const authService = new AuthService();
            setUser(await authService.getLoggedUser());
        })();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;