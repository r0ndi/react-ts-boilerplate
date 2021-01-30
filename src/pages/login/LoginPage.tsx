import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Copyright from '../../components/copyright/Copyright';
import LoginForm from '../../components/login-form/LoginForm';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useLoginPageStyles from './LoginPage.styles';
import { useTranslation } from 'react-i18next';

const LoginPage = () => {
  const styles = useLoginPageStyles();
  const { t } = useTranslation();

  return (
    <Container component="main" maxWidth="xs">
      <Box className={styles.paper}>
        <Avatar className={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          {t("page.login.title")}
        </Typography>

        <LoginForm />
      </Box>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default LoginPage;
