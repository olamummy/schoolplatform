const toggleShowPassword = () => {
    const passwordField = document.querySelectorAll(".password")[0];
    const type = passwordField.getAttribute("type") === "password" ? "text": "password";
    passwordField.setAttribute("type", type);
}

const toggleEyeIcon = () => {
    const icon = document.querySelectorAll(".eye")[0];
    
    if (icon.classList.contains("fa-eye")){
        icon.classList.replace("fa-eye","fa-eye-slash");
        return;
    }
    
    icon.classList.replace("fa-eye-slash", "fa-eye");
}

document.addEventListener("DOMContentLoaded",function(){
    const showPasswordToggler = document.querySelectorAll(".eye")[0];
    showPasswordToggler.addEventListener("click", ()=>{
        toggleShowPassword();
        toggleEyeIcon();
    })
});