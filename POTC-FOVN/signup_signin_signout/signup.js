

const signup_form = document.querySelector("#signup-form")
signup_form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const username = signup_form['username'].value
    const email = signup_form['email'].value
    const password = signup_form['password'].value
    // console.log(username, email, password)

    auth.createUserWithEmailAndPassword(email, password).then(
        (cred) => {
            alert("Sign up successfully!")
            console.log('thinh iu', cred)
            signup_form.reset()
        }
    )
})

// sign out: auth.signOut()
// sign in: auth.signInWithEmailAndPassword(email, password).then(
//     (cred) => { ... }
// )

// Function đăng ký
// function register() {
//     let email = document.getElementById('email').value
//     let password = document.getElementById('password').value
//     let username = document.getElementById('username').value

//     if(!validateField(email) || !validateField(password) || !validateField(username)) {
//         alert('One or more fields is null!')
//         return
//     }

//     auth.createUserWithEmailAndPassword(email, password)
//         .then(() => {
//             // khai báo biến user
//             let user = auth.currentUser
//             // khai báo database để thêm user vào
//             let database_ref = database.ref()

//             // tạo object user
//             let user_data = {
//                 email: email,
//                 username: username,
//                 password: password,
//                 timestamp: Date.now()
//             }

//             // thêm user vào database
//             database_ref.child('users/' + user.uid).set(user_data)

//             alert('Register successfully!')
//         })
//         .catch((error) => {
//             let error_code = error.code
//             let error_message = error.message

//             console.log(error_code + " " + error_message)
//         })
// }

// Function kiểm tra email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

// Function kiểm tra mật khẩu
function validatePassword(password) {
    if(password.length < 6) {
        return false
    } else {
        return true
    }
}

// Function kiểm tra ô nhập
function validateField(field) {
    if(field == null || field.length <= 0) {
        return false
    } else {
        return true
    }
}

// Sign-in (tách ra file signin.js)
// const signin_form = document.querySelector("#signin-form")
// signin_form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     const email = signin_form['email'].value
//     const password = signin_form['password'].value

//     auth.signInWithEmailAndPassword(email, password)
// })

// Sign-out (tách ra file signout.js hoặc dùng trong index)
// const signout_Btn = document.querySelector("#signout-btn")
// signout_Btn.addEventListener("click", () => {
//     auth.signOut()
// })