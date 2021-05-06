import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios'
import {useHistory} from 'react-router-dom'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const history=useHistory()
  const classes = useStyles();

  const [user,setUser]=useState({
    email:'',
    firstName:'',
    lastName:'',
    password:'',
    phone:''
  })

  const [err,setErr]=useState({
    name:'',
    email:'',
    password:'',
    phone:''
  })

  var nameC='';
  var phoneC='';
  var emailC='';
  var passwordC='';

  const register=async (e)=>{
    e.preventDefault();

    (user.firstName==''||user.lastName=='')? nameC='Họ tên không được để trống !': nameC='';

    const emailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    const phoneFormat = /^\d{10}$/;

    if(user.email=="")
    {
      emailC='Email không được bỏ trống !'
    }
    else if(!emailFormat.test(user.email))
    {
      emailC="Email không đúng định dạng !\nExample@gmail.com"
    }
    else
    {
      emailC=""
    }

    user.password.length<6?passwordC='Mật khẩu phải có nhiều hơn 6 ký tự !':passwordC="";

    if(user.phone=="")
    {
      phoneC="Số điện thoại không được bỏ trống !"
    }
    else if(!user.phone.match(phoneFormat))
    {
      phoneC="Số điện thoại phải là 10 chữ số !"
    }
   
    if(phoneC==""&&nameC==""&&emailC==""&&passwordC=="")
    {
      var acc = await Axios.post(`${process.env.REACT_APP_USER_API}/checkmail`, {
        Email: user.email,
      });
      if(acc.data.length!=0)
      {
        emailC="Email này đã được đăng ký !"
      }
      else
      {
        Axios.post(`${process.env.REACT_APP_USER_API}/create`,{
          Email:user.email,
          TenTK:user.firstName+" "+user.lastName,
          Password:user.password,
          Phone:user.phone,
          RoleId:null,
        }).then(history.push('/login'))
      } 
    }
    setErr({...err,name:nameC,email:emailC,password:passwordC,phone:phoneC}) 
  }
  const onChange=e=>{
    const {name,value}=e.target
    setUser({...user,[name]:value})
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={register}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={onChange}
              />
              <label style={{color:'red'}}>{err.name}</label>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={onChange}
              />
              <label style={{color:'red'}}>{err.email}</label>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                onChange={onChange}
              />
              <label style={{color:'red'}}>{err.phone}</label>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onChange}
              />
              <label style={{color:'red'}}>{err.password}</label>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}