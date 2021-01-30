import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useUserMenuStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      marginLeft: "10px",
      textTransform: "initial",
      fontSize: "0.95rem"
    },
    linkItem: {
      minWidth: "35px"
    }
  }),
);

export default useUserMenuStyles;
