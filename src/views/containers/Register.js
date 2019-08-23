let Register = {
    render : async () => {
        return (/*html*/ `
            <div class="auth-form">
                <div class="row">
                    <form class="col s12 ">
                        <h2 class="center-align form-header">Create User</h2>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="first_name" type="text" class="validate">
                                <label for="first_name">Full Name</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="username" type="text" class="validate">
                                <label for="username">Username</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="email" type="text" class="validate">
                                <label for="email">Email address</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="password" type="password" class="validate">
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <a id="register-submit-btn" class="submit-btn waves-effect waves-light blue btn-large">
                            <i class="material-icons left">send</i>Create User
                        </a>
                        <a class="center-align" href="/public/#/login">
                            <p>You already have a user? Click here</p>
                        </a>
                    </form>
                </div>
            </div>
        `);
    },
    after_render : async () => {
        document.getElementById('register-submit-btn').addEventListener("click", (event) => {
            event.preventDefault();
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            console.log("event triggered");
            registerRequest(email, password);
        });
        addEventListener("keyup", (event) => {
            if (event.keyCode === 13) {
                event.preventDefault();
                let email = document.getElementById("email").value;
                let password = document.getElementById("password").value;
                console.log("event triggered");
                registerRequest(email, password);
            }
        })
    }
}

function registerRequest(email, password) {
    console.log("function fired....");
    let statusOk = false;
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAg6_U0miWrh_L9QbIzJMXlLAc_wlSQmiI', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        })
    }).then(json => {
        statusOk = json.ok;
        return json.json();
    }).then(resp => {
        console.log(resp);
        if (statusOk) {
            window.location.replace('/public/#/');
        }
    }).catch(err => {
        console.log(err);
    });
}

export default Register;