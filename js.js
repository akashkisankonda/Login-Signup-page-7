function validate(errorlog, email, password) {
    let passwordWithoutSpaces = password.replaceAll(" ", "");
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) || !passwordWithoutSpaces.length >= 1) {
        errorlog.innerHTML = "Invalid Credentials";
        return false;
    }
}