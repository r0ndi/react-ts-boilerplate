import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyledMenuStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  }),
);

export default useStyledMenuStyles;
