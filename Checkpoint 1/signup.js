let signupForm = document.getElementById('signup-form')

signupForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let formData = new FormData(event.target)
    let username = formData.get('username')
    let email = formData.get('email')
    let phone = formData.get('phone')
    let password = formData.get('password')

    if (!isValidUsername(username)) {
        Swal.fire({
            title: 'Invalid Username!',
            text: 'Username must have 8 characters long! Please enter again!',
            icon: 'error',
            confirmButtonText: 'OK'
        })
        return
    } else if (!isValidEmail(email)) {
        Swal.fire({
            title: 'Invalid Email!',
            text: 'Email domain must be google.com! Please enter again!',
            icon: 'error',
            confirmButtonText: 'OK'
        })
        return
    } else if (!isValidPhone(phone)) {
        Swal.fire({
            title: 'Invalid Phone!',
            text: 'Phone must have +84! Please enter again!',
            icon: 'error',
            confirmButtonText: 'OK'
        })
        return
    } else if (!isValidPassword(password)) {
        Swal.fire({
            title: 'Invalid Password!',
            text: 'Password must contain letters and numbers! Please enter again!',
            icon: 'error',
            confirmButtonText: 'OK'
        })
        return
    }

    Swal.fire({
        title: 'Success!',
        text: `Welcome, you have successfully signed up!`,
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(() => {
        window.location.href = 'signup.html'
    })
})

// Hãy thực hiện kiểm tra tên người dùng (2.5đ)
// Yêu cầu: Tên người dùng phải có ít nhất 8 ký tự
function isValidUsername(username) {
    if (username.length < 8) {
        return false
    } else {
        return true
    }

}




// Hãy thực hiện kiểm tra email người dùng (2.5đ)
// Yêu cầu: Email phải có tên miền phía sau là google.com
function isValidEmail(email) {
    const regex = /^.*\@google\.com$/;
    return regex.test(email);
}

// Hãy thực hiện kiểm tra số điện thoại người dùng (2.5đ)
// Yêu cầu: Số điện thoại phải luôn bắt đầu bằng +84
function isValidPhone(phone) {

    const phoneRegex = /^(\+84)\d+$/;
    return phoneRegex.test(phone);
}

// Hãy thực hiện kiểm tra mật khẩu người dùng (2.5đ)
// Yêu cầu: Mật khẩu nhập vào phải bao gồm chữ và số
function isValidPassword(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
}
