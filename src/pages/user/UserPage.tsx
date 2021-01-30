import { Container } from "@material-ui/core"
import React from "react";
import UserDetailsEdit from "../../components/user-details-edit/UserDetailsEdit";

const UserPage = () => {
    return <>
        <Container>
            <UserDetailsEdit />
        </Container>
    </>;
}

export default UserPage;
