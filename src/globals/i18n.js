import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const getLanguage = () => {
  return i18n.language || "en";
};

export default i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        loginSuccess: "Login was successful!",
        logoutSuccess: "Logout was successful!",
        registerSuccess: "Registration was successful!",
        emailSentSuccess: "Email sent successfully!",
        registerHeaderPrimary: "Register your account",
        loginHeaderPrimary: "Login to your account",
        forgotPasswordHeaderPrimary: "Forgot Password?",
        forgotPasswordHeaderSecondary: "Enter your email to reset password",
        submit: "SUBMIT",
        register: "REGISTER",
        login: "LOGIN",
        orLogin: "Or Login Now",
        forgotPassword: "Forgot Password ?",
        dontHaveAccount: "Don't have an account?",
        // Placeholders
        emailPlaceholder: "E-mail address",
        firstNamePlaceholder: "First Name",
        lastNamePlaceholder: "Last Name",
        dateOfBirthPlaceholder: "Date of Birth",
        passwordPlaceholder: "Password",
        confirmPasswordPlaceholder: "Confirm Password",
        // Errors
        emailInvalid: "Email is invalid!",
        passwordInvalid: "Password is invalid!",
        passwordNotMatched: "Password must match!",
        required: "Required",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
