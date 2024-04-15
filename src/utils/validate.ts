export const checkValidate=(email:string, password:string)=>{
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid=/^.{8,}$/.test(password);
    if(!isEmailValid)return "Email ID is not valid";
    if(!isPasswordValid) return "Password Not valid";
    return ""; 
}