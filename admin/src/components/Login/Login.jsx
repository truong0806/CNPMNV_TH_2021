import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {
  const history = useHistory();
  var emailC = "";
  var passwordC = "";

  const classes = useStyles();

  const [user, setUser] = useState({ email: "", password: "" });
  const [err, setErr] = useState({ email: "", password: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };



  const onSubmit = async (e) => {
    e.preventDefault();
    const emailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (user.email == "") {
      emailC = "Email không được bỏ trống !";
    } else if (!emailFormat.test(user.email)) {
      emailC = "Email không đúng định dạng !\nExample@gmail.com";
    } else {
      emailC = "";
    }

    user.password.length < 6
      ? (passwordC = "Mật khẩu phải có nhiều hơn 6 ký tự !")
      : (passwordC = "");

    if (emailC == "" && passwordC == "") {
      var acc = await Axios.post(`https://deploy-hotel-api.herokuapp.com/account/check`, {
        Email: user.email,
        Password: user.password,
      });
      if(acc.data.length==0)
      {
        passwordC="Tài khoản hoặc mật khẩu không đúng !"
      }
      else
      {
        localStorage.removeItem('role')
        try
        {
          await Axios.get("https://deploy-hotel-api.herokuapp.com/role/get/"+acc.data[0].RoleId).then(res=>localStorage.setItem('role',res.data.length!=0?res.data[0].roleName:null))
          localStorage.setItem('email',acc.data[0].Email)
          localStorage.setItem('maTK',acc.data[0].MaTK)
        }
        catch(error)
        {

        }
        window.location.href="/"
      }
    }
    setErr({ ...err, email: emailC, password: passwordC });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onChange}
          />
          <label style={{ color: "red" }}>{err.email}</label>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onChange}
          />
          <label style={{ color: "red" }}>{err.password}</label>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
