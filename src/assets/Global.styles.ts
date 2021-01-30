import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useGlobalStyles = makeStyles((theme: Theme) =>
  createStyles({
    mt10: {
      marginTop: "10px"
    },
    link: {
      textTransform: "none",
      textDecoration: "none",
      color: "#000000"
    }
  }),
);

export default useGlobalStyles;
