// import 'react-toastify/dist/ReactToastify.css';

// const notify = (msg, type) => {
//   if (type === "warn") toast.warn(msg);
//   if (type === "success") toast.success(msg);
//   if (type === "error") toast.error(msg);
// };

// export default notify;
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const notify = (msg, type = "info", options = {}) => {
  const defaultOptions = {
    position: "top-center", // You can customize the position globally
    autoClose: 3000, // Duration in milliseconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    ...options, // Allow overriding of default options
  }

  switch (type) {
    case "warn":
      toast.warn(msg, defaultOptions)
      break
    case "success":
      toast.success(msg, defaultOptions)
      break
    case "error":
      toast.error(msg, defaultOptions)
      break
    default:
      toast.info(msg, defaultOptions) // Default notification type
      break
  }
}

export default notify
