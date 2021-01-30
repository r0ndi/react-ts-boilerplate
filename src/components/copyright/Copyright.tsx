import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useTranslation } from 'react-i18next';

const Copyright = () => {
    const { t } = useTranslation();

    return <>
        <Typography variant="body2" color="textSecondary" align="center">
            {t("component.copyright.title")} <Link color="inherit" href="https://googe.com/">{t("component.copyright.description")}</Link> {new Date().getFullYear()}.
        </Typography>
    </>;
}

export default Copyright;
