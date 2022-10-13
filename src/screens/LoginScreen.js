import React, { useState, useEffect } from "react";
import "../stylesheets/login.css";
import swal from "sweetalert";
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";
import {
    BrowserRouter as Router,
    Link,
    redirect,
    useNavigate,
} from "react-router-dom";



const LoginScreen = () => {
    const win = sessionStorage;
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    
    const [status, setStatus] = useState("Login");


    const formSchema = yup.object({
        email: yup.string().email("Email ไม่ถูกต้อง").required("กรุณาใส่ email"),
        pwd: yup
            .string()
            .required("กรุณากรอกรหัสผ่าน")
            .min(6, "รหัสต้องมากกว่า 6 ตัวอักษร")
            .max(30),
    });
    const formik = useFormik({
        initialValues: {
            email: "",
            pwd: "",
        },
        validationSchema: formSchema,
        onSubmit:  (values) => {
            setStatus("IN PROGRESS...");
            axios
                .post(`http://localhost:3300/sa/login`, {
                    email: values.email,
                    password: values.pwd,
                })
                .then((response) => {
           
                    setInterval(() => {
                        localStorage.setItem("status", true);
                        localStorage.setItem("code",response.data.std_code)
                        navigate("/home");
                    },3000);
              

                })
                .catch((e) => {
                    swal(e.response.data, "success", {
                        icon: "error",
                        buttons: false,
                        text: " ",
                        timer: 3000,
                    });
                    setStatus("LOGIN")
                });
        },
    });
    useEffect(() => {
        if (localStorage.getItem("status") == 'true') {
            window.location='/home'
        }
    }, [])

    return (
        <div className="box-center">
            <div className="box-1">
                <img src="/images/classroom (1).png" width="" />
            </div>
            <div className="box-2">
                <div></div>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <h1 style={{ color: "white" }}>Sign-In</h1>
                        <div>
                            <div
                                className="mt-3 text-start"
                                style={{ fontSize: "30px", color: "#eeeeee" }}
                            >
                                Email
                            </div>
                            <input
                                type="text"
                                className="mt-1"
                                {...formik.getFieldProps("email")}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="error">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div>
                            <div
                                className="mt-3 text-start"
                                style={{ fontSize: "30px", color: "#eeeeee" }}
                            >
                                Password
                            </div>
                            <input
                                type="password"
                                className="mt-1"
                                {...formik.getFieldProps("pwd")}
                            ></input>
                            {formik.touched.pwd && formik.errors.pwd ? (
                                <div className="error">{formik.errors.pwd}</div>
                            ) : null}
                            <div
                                className="text-end"
                                style={{ fontSize: "20px", color: "#eeeeee" }}
                            >
                                Forget Password?
                            </div>
                        </div>
                        <div className="mt-3">
                            <input type="submit" value={status}></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
