import { Typography } from "@material-ui/core";
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t } = useTranslation();

    return <>
        <Typography>{t("page.home.title")}</Typography>
    </>;
}

export default HomePage;
