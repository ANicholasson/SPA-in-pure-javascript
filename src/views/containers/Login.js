let Login = {
    render : async () => {
        return (/*html*/`
            <div class="background">
                <div class="auth-form">
                    <div class="row">
                        <form class="col s12">
                            <h2 class="center-align form-header">Login</h2>
                            <div class="row">
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input id="email" type="text" class="validate">
                                    <label for="email">Email</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">lock_outline</i>
                                    <input id="password" type="password" class="validate">
                                    <label for="password">Password</label>
                                </div>
                            </div>
                            <a id="login-submit-btn" class="submit-btn waves-effect waves-light blue btn-large">
                                <i class="material-icons left">send</i>Login
                            </a>
                            <a class="center-align" href="/public/#/register">
                                <p>Not a user? Create one here</p>
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        `);
    },
    after_render : async () => {
        document.getElementById('login-submit-btn').addEventListener("click", (event) => {
            event.preventDefault();
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            console.log("event triggered");
            loginRequest(email, password);
        });
        addEventListener("keyup", (event) => {
            if (event.keyCode === 13) {
                event.preventDefault();
                let email = document.getElementById("email").value;
                let password = document.getElementById("password").value;
                console.log("event triggered");
                loginRequest(email, password);
            }
        })
    }
}

function loginRequest(email, password) {
    console.log("function fired....");
    let statusOk = false;
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAg6_U0miWrh_L9QbIzJMXlLAc_wlSQmiI', {
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

export default Login;