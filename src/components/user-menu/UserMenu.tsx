import React, { useContext, useState, MouseEvent } from 'react';
import { ExitToApp, AssignmentInd, Person, Delete } from '@material-ui/icons';
import StyledMenu from './StyledMenu';
import { Button, ListItemIcon, ListItemText, MenuItem, Typography } from '@material-ui/core';
import { Link, useHistory } from "react-router-dom";
import AuthService from '../../services/AuthService';
import UserContext from '../../contexts/user-context/UserContext';
import useUserMenuStyles from './UserMenu.styles';
import useGlobalStyles from '../../assets/Global.styles';
import UserService from '../../services/UserService';
import NotificationService from '../../services/NotifictaionService';
import UserContextType from '../../types/UserContext.type';
import { useTranslation } from 'react-i18next';

const UserMenu = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const globalStyles = useGlobalStyles();
  const userMenuStyles = useUserMenuStyles();
  const userContext: UserContextType = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const logOutHandler = (): void => {
    localStorage.setItem(AuthService.STORAGE_ACCESS_TOKEN, "");
    userContext.setUser(null);

    if (history) {
        history.push("/login");
    }
  };

  const deleteUser = async (): Promise<void> => {
    const userService: UserService = new UserService();
    const notificationService: NotificationService = new NotificationService();

    if (await userService.deleteUser(userContext.user?.id ?? "")) {
      notificationService.addSuccess(t("success.user-has-been-deleted"));
      localStorage.setItem(AuthService.STORAGE_ACCESS_TOKEN, "");
      userContext.setUser(null);

      if (history) {
          history.push("/login");
      }
    }
  }

  return (
    <div>
      <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="primary" onClick={handleClick}>
          <Person />
          <Typography className={userMenuStyles.typography}>{userContext?.user?.email}</Typography>
      </Button>

      <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem>
          <ListItemIcon className={userMenuStyles.linkItem}>
            <AssignmentInd fontSize="small" />
          </ListItemIcon>

          <Link to="/user" className={globalStyles.link}>
            <ListItemText primary={t("component.user-menu.account-details")} />
          </Link>
        </MenuItem>

        <MenuItem>
          <ListItemIcon className={userMenuStyles.linkItem}>
            <Delete fontSize="small" />
          </ListItemIcon>

          <ListItemText primary={t("component.user-menu.account-delete")} onClick={deleteUser} />
        </MenuItem>

        <MenuItem>
          <ListItemIcon className={userMenuStyles.linkItem}>
            <ExitToApp fontSize="small" />
          </ListItemIcon>

          <ListItemText primary={t("component.user-menu.logout")} onClick={logOutHandler} />
        </MenuItem>
      </StyledMenu>
    </div>
  );
}

export default UserMenu;
