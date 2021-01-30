import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Copyright from '../../components/copyright/Copyright';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import RegisterForm from '../../components/register-form/RegisterForm';
import useRegisterPageStyles from './RegisterPage.styles';
import { useTranslation } from 'react-i18next';

const RegisterPage = () => {
  const styles = useRegisterPageStyles();
  const { t } = useTranslation();

  return (
    <Container component="main" maxWidth="xs">
      <Box className={styles.paper}>
        <Avatar className={styles.avatar}>
            <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
            {t("page.register.title")}
        </Typography>

        <RegisterForm />
      </Box>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default RegisterPage;
