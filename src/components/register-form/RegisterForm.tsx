import { Button, TextField, Link, Grid, Box } from '@material-ui/core';
import AuthService from '../../services/AuthService';
import { useHistory } from "react-router-dom";
import { useContext, useState } from 'react';
import UserContext from '../../contexts/user-context/UserContext';
import useRegisterFormStyles from './RegisterForm.styles';
import RegisterData from '../../types/RegisterData.type';
import NotificationService from '../../services/NotifictaionService';
import { useTranslation } from 'react-i18next';
import UserContextType from '../../types/UserContext.type';

const RegisterForm = () => {
    const [formData, setFormData] = useState<RegisterData>({ email: "", password: "", firstname: "", lastname: "" });
    const userContext: UserContextType = useContext(UserContext);
    const registerFormStyles = useRegisterFormStyles();
    const { t } = useTranslation();
    const history = useHistory();

    const sumbitForm = async (): Promise<void> => {
        const authService: AuthService = new AuthService();
        const notifictaionService: NotificationService = new NotificationService();
        const loginStatus: boolean = await authService.register(formData);

        if (!loginStatus) {
            notifictaionService.addDanger(t("errors.invalid-user-data"));
            return;
        }

        userContext.setUser(await authService.getLoggedUser());
        history.push("/home");
    }

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({...formData, email: event.currentTarget.value});
    }

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({...formData, password: event.currentTarget.value});
    }

    const handleChangeFirstname = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({...formData, firstname: event.currentTarget.value});
    }

    const handleChangeLastname = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({...formData, lastname: event.currentTarget.value});
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === "Enter") {
            sumbitForm();
        }
    }

    return (
        <Box className={registerFormStyles.form}>
            <TextField variant="outlined" margin="normal" required fullWidth type="firstname" id="firstname" label={t("forms.user.firstname")} name="firstname" autoComplete="firstname" value={formData.firstname} autoFocus onChange={handleChangeFirstname} onKeyDown={handleKeyDown} />
            <TextField variant="outlined" margin="normal" required fullWidth type="lastname" id="lastname" label={t("forms.user.lastname")} name="lastname" autoComplete="lastname" value={formData.lastname} onChange={handleChangeLastname} onKeyDown={handleKeyDown} />
            <TextField variant="outlined" margin="normal" required fullWidth type="email" id="email" label={t("forms.user.email")} name="email" autoComplete="email" value={formData.email} onChange={handleChangeEmail} onKeyDown={handleKeyDown} />
            <TextField variant="outlined" margin="normal" required fullWidth type="password" id="password" label={t("forms.user.password")} name="password" autoComplete="current-password" onChange={handleChangePassword} onKeyDown={handleKeyDown} />

            <Button type="submit" fullWidth variant="contained" color="primary" className={registerFormStyles.submit} onClick={sumbitForm}>{t("component.register-form.submit-button")}</Button>

            <Grid container>
                <Grid item>
                    <Link href="#" variant="body2" onClick={() => history.push("/login")}>{t("component.register-form.login-redirect")}</Link>
                </Grid>
            </Grid>
        </Box>
    );
}

export default RegisterForm;