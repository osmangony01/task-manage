
const getFormData = () => {
    let user = {};

    const userInfo = localStorage.getItem('formData');

    if (userInfo) {
        user = JSON.parse(userInfo);
    }
    return user;
}

const addFormData = (formData) => {
    localStorage.setItem("formData", JSON.stringify(formData));
}


export { getFormData, addFormData };