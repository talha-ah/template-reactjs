import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  center: {
    height: '100vh',
    width: '100wh',
    display: 'grid',
    placeItems: 'center',
    backgroundColor: '#fff',
  },
  progress: {
    backgroundColor: '#fff',
  },
}));

const Progress = () => {
  const classes = useStyles();

  return (
    <div className={classes.progress}>
      <CircularProgress />
    </div>
  );
};

const CenterProgress = () => {
  const classes = useStyles();

  return (
    <div className={classes.center}>
      <CircularProgress />
    </div>
  );
};

export default {
  Progress,
  CenterProgress,
};
