

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    flexGrow: 1,
    margin: 10,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
});

export default styles
