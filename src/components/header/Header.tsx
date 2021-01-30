import { Box, Typography, Grid, Container } from "@material-ui/core";
import UserMenu from "../user-menu/UserMenu";
import { Link } from "react-router-dom";
import React from "react";
import useGlobalStyles from "../../assets/Global.styles";
import { Trans, useTranslation } from "react-i18next";

const Header = () => {
    const globalStyles = useGlobalStyles();
    const { t } = useTranslation();

    return <>
        <Container component="main" maxWidth="lg">
            <Box p={1}>
                <Grid container>
                    <Grid item xs={10}>
                        <Link to="/home" className={globalStyles.link}>
                            <Typography variant="h6" paragraph>
                                <Trans t={t}>component.header.app-name</Trans>
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <UserMenu />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </>;
}

export default Header;
