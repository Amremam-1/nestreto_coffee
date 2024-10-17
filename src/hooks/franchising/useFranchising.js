import { useDispatch } from "react-redux"
import * as Yup from "yup"
import { useState } from "react"
import { faranchising } from "../../redux/thunkActions/authActions"

const useFranchising = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const branchesToStartList = [
    { titleEn: "1", titleAr: "1" },
    { titleEn: "2", titleAr: "2" },
    { titleEn: "3", titleAr: "3" },
    { titleEn: "Furthermore", titleAr: "أكثر من ذلك" },
  ]

  // Schemas for different steps
  const personalInfoSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Please enter your full name.")
      .min(2, "Full name must be at least 2 characters long."),
    IDNumber: Yup.number()
      .required("Please provide your ID number.")
      .typeError("ID number must be a number."),
    nationality: Yup.string().required("Please select your nationality."),
    dateOfBirth: Yup.date()
      .required("Date of birth is required.")
      .max(new Date(), "Date of birth cannot be in the future."),
    educQualification: Yup.string()
      .required("Please specify your educational qualification.")
      .min(2, "Educational qualification must be at least 2 characters long."),
    mobileNumber: Yup.string()
      .required("Mobile number is required.")
      .matches(
        /^\+?\d{10,15}$/,
        "Enter a valid mobile number with 10 to 15 digits."
      ),
    email: Yup.string()
      .required("Email address is required.")
      .email("Enter a valid email address."),
    phoneNumber: Yup.string()
      .required("Phone number is required.")
      .matches(
        /^\+?\d{10,15}$/,
        "Enter a valid phone number with 10 to 15 digits."
      ),
    address: Yup.string()
      .required("Please provide your address.")
      .min(5, "Address must be at least 5 characters long."),
  })

  const financialConditionSchema = Yup.object().shape({
    annualIncome: Yup.number()
      .required("Please enter your total annual income.")
      .positive("Annual income must be a positive number.")
      .typeError("Annual income must be a number."),
    bankAccountType: Yup.string().required(
      "Please select your bank account type."
    ),
    commercialActivity: Yup.string()
      .required("Please describe your commercial activity.")
      .min(
        5,
        "Commercial activity description must be at least 5 characters long."
      ),
    expectedCapital: Yup.number()
      .required("Please specify the expected capital.")
      .positive("Expected capital must be a positive number.")
      .typeError("Expected capital must be a number."),
    loan: Yup.string().required("Please provide information about any loans."),
    manageBusiness: Yup.boolean()
      .required("This field is required")
      .transform((value, originalValue) => originalValue === "نعم"),
    havePartners: Yup.boolean()
      .required("This field is required")
      .transform((value, originalValue) => originalValue === "نعم"),
  })

  const jobInfoSchema = Yup.object().shape({
    jobTitle: Yup.string()
      .required("Please enter your job title.")
      .min(2, "Job title must be at least 2 characters long."),
    employer: Yup.string()
      .required("Please provide your employer's name.")
      .min(2, "Employer's name must be at least 2 characters long."),
    workAddress: Yup.string()
      .required("Please enter your work address.")
      .min(5, "Work address must be at least 5 characters long."),
    joiningDate: Yup.date()
      .required("Please provide your joining date.")
      .max(new Date(), "Joining date cannot be in the future."),
    experience: Yup.number()
      .required("Please specify your years of experience.")
      .positive("Experience must be a positive number.")
      .integer("Experience must be a whole number.")
      .typeError("Experience must be a number."),
    companyEmail: Yup.string()
      .required("Please enter your company email address.")
      .email("Enter a valid email address."),
    previousJobs: Yup.string()
      .required("Please provide information about your previous jobs.")
      .min(5, "Previous jobs description must be at least 5 characters long."),
  })

  const aboutFranchisingSchema = Yup.object().shape({
    franchiseReason: Yup.string().required("Franchise Reason is required"),
    branchesToStart: Yup.string().oneOf(
      branchesToStartList.map((item) => item.titleEn)
    ),

    expandPlans: Yup.boolean()
      .required("This field is required")
      .transform((value, originalValue) => originalValue === "نعم"),

    franchiseCity: Yup.string().required("Franchise City is required"),
    suggestedLocation: Yup.string().required("Suggested Location is required"),
    suggestions: Yup.string().required("Suggestions is required"),
    file: Yup.mixed().required("File is required"),
  })

  const initialValues = {
    fullName: "",
    IDNumber: "",
    nationality: "",
    dateOfBirth: "",
    educQualification: "",
    mobileNumber: "",
    email: "",
    phoneNumber: "",
    address: "",
    annualIncome: "",
    bankAccountType: "",
    commercialActivity: "",
    expectedCapital: "",
    loan: "",
    manageBusiness: false,
    havePartners: false,
    jobTitle: "",
    employer: "",
    workAddress: "",
    joiningDate: "",
    experience: "",
    companyEmail: "",
    previousJobs: "",
    franchiseReason: "",
    branchesToStart: "",
    expandPlans: false,
    franchiseCity: "",
    suggestedLocation: "",
    suggestions: "",
    file: null,
  }

  const getFieldProps = (fieldName, form) => ({
    name: fieldName,
    value: form.values[fieldName],
    errorMsg:
      form.touched[fieldName] && form.errors[fieldName]
        ? form.errors[fieldName]
        : null,
    onChange: fieldName === "file" ? handleFileChange : form.handleChange,
    onBlur: form.handleBlur,
  })

  const handleFileChange = (e, form) => {
    const file = e.target.files[0]
    form.setFieldValue("file", file)
  }

  // const onSubmitForm = async (values) => {
  //   const formData = new FormData()
  //   Object.keys(values).forEach((key) => {
  //     if (key === "file" && values[key]) {
  //       formData.append(key, values[key])
  //     } else {
  //       formData.append(key, values[key])
  //     }
  //   })

  //   setLoading(true)
  //   try {
  //     await dispatch(faranchising(formData))
  //   } catch (error) {
  //     console.error("Error submitting data:", error)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  const onSubmitForm = async (values) => {
    const formData = new FormData()
    Object.keys(values).forEach((key) => {
      if (values[key] !== undefined && values[key] !== null) {
        formData.append(key, values[key])
      }
    })

    setLoading(true)
    try {
      await dispatch(faranchising(formData))
    } catch (error) {
      console.error("Error submitting data:", error)
    } finally {
      setLoading(false)
    }
  }

  return {
    getFieldProps,
    onSubmitForm,
    handleFileChange,
    initialValues,
    personalInfoSchema,
    financialConditionSchema,
    jobInfoSchema,
    aboutFranchisingSchema,
  }
}

export default useFranchising
