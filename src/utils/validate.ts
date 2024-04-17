export const checkValidate = (email: string, password: string, name: string, isSignInForm: boolean) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^.{8,}$/.test(password);
    const isNameValid = name?.length > 3;
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password Not valid";
    if (!isNameValid && !isSignInForm) return "Name Not Valid";
    return "";
}