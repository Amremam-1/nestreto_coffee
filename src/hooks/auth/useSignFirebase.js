import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import { useState } from "react"
import notify from "../../hooks/notify/useNotification"
import { loginUser } from "../../redux/thunkActions/authActions"

const useSignFirebase = (actionType = "login") => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const LoginFirebase = async () => {
    setLoading(true)

    try {
      const apiToken = Cookies.get("api_token")
      const result = await dispatch(loginUser({ apiToken }))

      if (loginUser.fulfilled.match(result)) {
        const signIn = result.payload

        if (signIn && signIn.status) {
          if (signIn.user && signIn.user.api_token) {
            Cookies.set("api_token", signIn.user.api_token)
            Cookies.set("user_id", signIn.user.id)
            localStorage.setItem("api_token", signIn.user.api_token)
            localStorage.setItem("user_id", signIn.user.id)

            notify(
              actionType === "login"
                ? "Login successful!"
                : "Signup successful!",
              "success"
            )

            setTimeout(() => navigate("/"), 2000)
          } else {
            Cookies.remove("api_token")
            Cookies.remove("user_id")
            localStorage.removeItem("api_token")
            localStorage.removeItem("user_id")
          }
        } else {
          Cookies.remove("api_token")
          Cookies.remove("user_id")
          localStorage.removeItem("api_token")
          localStorage.removeItem("user_id")
          setErrorMsg(signIn.message || "An error occurred during login")
          notify(signIn.message || "An error occurred during login", "error")
        }
      } else {
        setErrorMsg(result.payload)
        notify(result.payload, "error")
      }
    } catch (error) {
      console.error("Login error:", error)
      setErrorMsg("An error occurred during login")
      notify("An error occurred during login", "error")
    } finally {
      setLoading(false)
    }
  }

  return { LoginFirebase, loading, errorMsg }
}

export default useSignFirebase
