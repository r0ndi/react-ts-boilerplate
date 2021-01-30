import { Dispatch, SetStateAction } from "react";
import UserType from "./User.type";

type UserContextType = {
    user: UserType | null;
    setUser: Dispatch<SetStateAction<UserType | null>>;
}

export default UserContextType;
