import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { resetPassword } from "../../redux/thunkActions/authActions"
import { useFormik } from "formik"
import * as Yup from "yup"
import notify from "../notify/useNotification"

const useResetPassword = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const ResetSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password should be of minimum 8 characters length")
      .max(50, "Password should be of maximum 50 characters length")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    code: Yup.string()
      .trim()
      .length(6, "Code must be exactly 6 digits")
      .required("Verification code is required"),
  })

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      code: "",
    },
    validationSchema: ResetSchema,
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

  let code
  let codeError
  let onChangeCode
  let onBlurCode

  let password
  let passwordError
  let onChangePassword
  let onBlurPassword

  let confirmPassword
  let confirmPasswordError
  let onChangeConfirmPassword
  let onBlurConfirmPassword

  let onSubmit

  email = formik.values.email
  emailError =
    formik.touched.email && formik.errors.email ? formik.errors.email : null
  onChangeEmail = formik.handleChange
  onBlurEmail = formik.handleBlur

  password = formik.values.password
  passwordError =
    formik.touched.password && formik.errors.password
      ? formik.errors.password
      : null
  onChangePassword = formik.handleChange
  onBlurPassword = formik.handleBlur
  confirmPassword = formik.values.confirmPassword
  confirmPasswordError =
    formik.touched.confirmPassword && formik.errors.confirmPassword
      ? formik.errors.confirmPassword
      : null
  onChangeConfirmPassword = formik.handleChange
  onBlurConfirmPassword = formik.handleBlur
  onSubmit = formik.handleSubmit

  code = formik.values.code
  codeError =
    formik.touched.code && formik.errors.code ? formik.errors.code : null
  onChangeCode = formik.handleChange
  onBlurCode = formik.handleBlur

  const onSubmitForm = async (values) => {
    const loginData = {
      email: values.email,
      password: values.password,
      code: values.code,
    }
    dispatch(resetPassword(loginData))
  }

  const { resetPasswordRes, error } = useSelector((state) => state.authSlice)

  useEffect(() => {
    if (resetPasswordRes?.status) {
      // Check if status is true
      notify(
        resetPasswordRes.message || "Password successfully reset",
        "success"
      )
      navigate("/login")
    } else if (error) {
      notify(
        error.message || "Failed to reset password. Please try again.",
        "error"
      )
    }
  }, [resetPasswordRes, error, navigate])

  return [
    email,
    emailError,
    onChangeEmail,
    onBlurEmail,
    password,
    passwordError,
    onChangePassword,
    onBlurPassword,
    confirmPassword,
    confirmPasswordError,
    onChangeConfirmPassword,
    onBlurConfirmPassword,
    code,
    codeError,
    onChangeCode,
    onBlurCode,
    onSubmit,
  ]
}

export default useResetPassword
