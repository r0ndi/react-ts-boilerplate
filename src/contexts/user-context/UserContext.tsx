import { createContext } from "react";
import UserContextType from "../../types/UserContext.type";

const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {}
});

export default UserContext;
