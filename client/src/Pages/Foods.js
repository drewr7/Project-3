import React from 'react';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    margin: 'auto',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://images.unsplash.com/photo-1523901839036-a3030662f220?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '300px'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const inputStyle = {
  padding: 10
}

const activitylevel = [
  {
    value: '1.2',
    label: 'Sedentary',
  },
  {
    value: '1.375',
    label: 'Lightly active',
  },
  {
    value: '1.55',
    label: 'Moderately active',
  },
  {
    value: '1.725',
    label: 'Very active',
  },
  {
    value: '1.9',
    label: 'Extra active',
  }
];

const gender = [
  {
    value: '1',
    label: 'Male',
  },
  {
    value: '2',
    label: 'Female',
  }
];

export default function Foods() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    weight: '',
    height:'',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [activity, setActivity] = React.useState('3');

  const activityChange = event => {
    setActivity(event.target.value);
  };

  const [genders, setGender] = React.useState('Male');

  const genderChange = event => {
    setGender(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: 'none' }}
                src="https://images.unsplash.com/photo-1523901839036-a3030662f220?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Calculate My Macros
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Typography>
                <body1>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Enter your information and get your daily Macros
      </Typography>
      <br/>
      <div>
      <TextField
          id="outlined-select-currency"
          select
          value={genders}
          onChange={genderChange}
          helperText="Gender"
          variant="outlined"
          style={inputStyle}
        >
          {gender.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" style={inputStyle}>
          <OutlinedInput
            id="outlined-adornment-weight"
            value={values.weight}
            onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end">Inches</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            labelWidth={0}
          />
          <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" style={inputStyle}>
          <OutlinedInput
            id="outlined-adornment-weight"
            value={values.weight}
            onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            labelWidth={0}
          />
          <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" style={inputStyle}>
          <OutlinedInput
            id="outlined-adornment-weight"
            value={values.weight}
            onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            labelWidth={0}
          />
          <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <TextField
          id="outlined-select-currency"
          select
          value={activity}
          onChange={activityChange}
          helperText="Activity Level"
          variant="outlined"
          style={inputStyle}
        >
          {activitylevel.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <br/>
      <Button variant="contained" color="primary" size="large">
            Submit
        </Button>
        <br/>
        <div>
            //Macro Results
        </div>
    </React.Fragment>
                </body1>
              </Typography>
    </div>
  );
}