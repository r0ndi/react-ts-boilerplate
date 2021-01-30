import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const SuspenseFallback = () => {
    const { t } = useTranslation();

    return <>
        <Typography variant="body2" color="textSecondary" align="center">{t("component.suspense-fallback.loading-massage")}</Typography>
    </>;
};

export default SuspenseFallback;