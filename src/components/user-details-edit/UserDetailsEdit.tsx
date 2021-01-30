import { Button, TextField, Typography, Grid, Container } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import UserContext from '../../contexts/user-context/UserContext';
import NotificationService from '../../services/NotifictaionService';
import { Save } from '@material-ui/icons';
import UserService from '../../services/UserService';
import UserType from '../../types/User.type';
import useGlobalStyles from '../../assets/Global.styles';
import { useTranslation } from 'react-i18next';
import UserContextType from '../../types/UserContext.type';

const UserDetailsEdit = () => {
    const { t } = useTranslation();
    const globalStyles = useGlobalStyles();
    const userContext: UserContextType = useContext(UserContext);
    const [formData, setFormData] = useState<UserType>({
        id: String(userContext.user?.id),
        email: userContext.user?.email ?? "",
        firstname: userContext.user?.firstname ?? "",
        lastname: userContext.user?.lastname ?? "",
    });

    const handleChangeFirstname = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({...formData, firstname: event.currentTarget.value});
    }

    const handleChangeLastname = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({...formData, lastname: event.currentTarget.value});
    }

    const saveUserData = async (): Promise<void> => {
        const userService: UserService = new UserService();
        const notificationService: NotificationService = new NotificationService();

        if (await userService.patchUser(formData.id, formData)) {
            notificationService.addSuccess(t("success.user-updated"));
        }
    }

    return <>
        <Container>
            <Typography variant="h5">{t("component.user-details-edit.title")}</Typography>

            <Grid item xs={6}>
                <Grid item xs={12}>
                    <TextField variant="outlined" margin="normal" required fullWidth type="firstname" id="firstname" label={t("forms.user.firstname")} name="firstname" autoComplete="firstname" value={formData.firstname} onChange={handleChangeFirstname} />
                    <TextField variant="outlined" margin="normal" required fullWidth type="lastname" id="lastname" label={t("forms.user.lastname")} name="lastname" autoComplete="lastname" value={formData.lastname} onChange={handleChangeLastname} />

                    <Button variant="contained" color="primary" startIcon={<Save />} className={globalStyles.mt10} onClick={saveUserData}>
                        {t("component.user-details-edit.submit-button")}
                    </Button>
                </Grid>
            </Grid>
        </Container>
    </>;
}

export default UserDetailsEdit;