import { auth } from '../../../store/actions/authActions.js';

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
            console.log("First:", email, password);
            auth(email, password);
        });
        addEventListener("keyup", (event) => {
            if (event.keyCode === 13) {
                event.preventDefault();
                let email = document.getElementById("email").value;
                let password = document.getElementById("password").value;
                console.log("event triggered");
                auth(email, password);
            }
        })
    }
}

export default Login;