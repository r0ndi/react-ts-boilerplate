import { Box, Container } from "@material-ui/core";
import React from "react";
import Header from "../../components/header/Header";
import ComponentWithChildrenType from "../../types/ComponentWithChildren.type";

const Dashboard = ({ children }: ComponentWithChildrenType) => {
    return <>
        <Header />

        <Container component="main" maxWidth="lg">
            <Box>
                {children}
            </Box>
        </Container>
    </>;
}

export default Dashboard;