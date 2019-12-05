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
import ReactDOM from 'react-dom'

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

const activity = [
  {
    value: 1.2,
    label: 'Sedentary',
  },
  {
    value: 1.375,
    label: 'Lightly active',
  },
  {
    value: 1.55,
    label: 'Moderately active',
  },
  {
    value: 1.725,
    label: 'Very active',
  },
  {
    value: 1.9,
    label: 'Extra active',
  }
];

const gender = [
  {
    value: 1,
    label: 'Male',
  },
  {
    value: 2,
    label: 'Female',
  }
];

export default function Foods() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    gender: 1,
    weight: 0,
    height:0,
    age: 0,
    acitvity: 1.55,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const calculateMacros = event => {
    let calories = 0
    if(values.gender === 1){
      let malecals = ((values.weight*10)+(values.height*6.25)-(values.age*5)+5)*values.acitvity
      // this.setState({result: malecals})
      calories = (
        <div>
      <h3>Your daily calorie goal</h3>
      <h1>{malecals}</h1>
      </div>
      );
      console.log(malecals)
      ReactDOM.render(calories, document.getElementById('calculatedcals'));
    }
    else if(values.gender === 2){
      let femalecals = (((values.weight)*(10))+((values.height)*(6.25))-((values.age)*(5))-(161))*(values.activity)
      // this.setState({result: femalecals})
      calories = femalecals
      console.log(femalecals)
      ReactDOM.render(calories, document.getElementById('calculatedcals'));
    }
    return 
  }

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
                    My Daily Calorie Intake
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
          value={values.gender}
          onChange={handleChange('gender')}
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
            type="number"
            onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
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
            id="outlined-adornment-height"
            value={values.height}
            type="number"
            onChange={handleChange('height')}
            endAdornment={<InputAdornment position="end">cm</InputAdornment>}
            aria-describedby="outlined-height-helper-text"
            inputProps={{
              'aria-label': 'height',
            }}
            labelWidth={0}
          />
          <FormHelperText id="outlined-weight-helper-text">Height</FormHelperText>
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" style={inputStyle}>
          <OutlinedInput
            id="outlined-adornment-age"
            value={values.age}
            type="number"
            onChange={handleChange('age')}
            endAdornment={<InputAdornment position="end">yrs</InputAdornment>}
            aria-describedby="outlined-age-helper-text"
            inputProps={{
              'aria-label': 'age',
            }}
            labelWidth={0}
          />
          <FormHelperText id="outlined-weight-helper-text">Age</FormHelperText>
        </FormControl>
        <TextField
          id="outlined-select-currency"
          select
          value={values.acitvity}
          onChange={handleChange('activity')}
          helperText="Activity Level"
          variant="outlined"
          style={inputStyle}
        >
          {activity.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <br/>
      <Button variant="contained" color="primary" size="large" onClick={calculateMacros}>
            Submit
        </Button>
        <br/>
        <br/>
        <br/>
        <div id="calculatedcals">
        </div>
    </React.Fragment>
                </body1>
              </Typography>
    </div>
  );
}