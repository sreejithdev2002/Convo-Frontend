import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import "./LogReg.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LoginApi } from "../Services/userApi";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const initialValues = {
    phone: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const { data } = await LoginApi(values);
      if (data.status) {
        localStorage.setItem("jwt", data.token);
        toast.success("Login Successful");
        navigate("/home");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="flex flex-col items-center h-[100vh] justify-center backgroundImage">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-4 rounded-md flex flex-col lg:w-[25vw]"
      >
        <h1 className="text-3xl text-center mb-4">Login User</h1>
        <TextField
          name="phone"
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phone && formik.errors.phone && (
          <p
            className="error-message"
            style={{ marginTop: "5px", color: "red" }}
          >
            {formik.errors.phone}
          </p>
        )}
        <br />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        {formik.touched.password && formik.errors.password && (
          <p
            className="error-message"
            style={{ marginTop: "5px", color: "red" }}
          >
            {formik.errors.password}
          </p>
        )}
        <br />
        <button
          type="submit"
          className="p-2 m-1 bg-blue-500 rounded-md text-white hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
        <button
          onClick={() => {
            navigate("/register");
          }}
          className="p-2 m-1 bg-white rounded-md text-blue-500 border-2 border-blue-500 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Login;
