import { makeStyles } from '@material-ui/core/styles';

const useRegisterFormStyles = makeStyles((theme) => ({
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

export default useRegisterFormStyles;
