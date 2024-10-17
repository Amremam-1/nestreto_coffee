import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { forgetPassword } from "../../redux/thunkActions/authActions"
import { useFormik } from "formik"
import * as Yup from "yup"
import Cookies from "js-cookie"
import notify from "../notify/useNotification"

const useForgetPassowrd = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const ForgetSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
  })

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgetSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      onSubmitForm(values)
    },
  })

  let email
  let emailError
  let onChangeEmail
  let onBlurEmail
  let onSubmit

  email = formik.values.email
  emailError =
    formik.touched.email && formik.errors.email ? formik.errors.email : null
  onChangeEmail = formik.handleChange
  onBlurEmail = formik.handleBlur
  onSubmit = formik.handleSubmit

  const onSubmitForm = async (values) => {
    const userEmail = {
      email: values.email,
    }
    console.log("forgetPasswordEmail: ", userEmail)

    dispatch(forgetPassword(userEmail))
  }

  const { forgetPasswordRes, error } = useSelector((state) => state.authSlice)

  useEffect(() => {
    if (forgetPasswordRes?.status) {
      // Check if status is true
      notify(
        forgetPasswordRes.message || "Password reset link sent to your email",
        "success"
      )
      navigate("/reset-password")
    } else if (error) {
      notify(
        error.message || "Failed to send reset link, please try again",
        "error"
      )
    }
  }, [forgetPasswordRes, error, navigate])

  return [email, emailError, onChangeEmail, onBlurEmail, onSubmit]
}
export default useForgetPassowrd
