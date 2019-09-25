import { auth } from '../../store/actions/authActions.js';

let Register = {
    render : async () => {
        return (/*html*/ `
            <div class="auth-form">
                <div class="row">
                    <form class="col s12 ">
                        <h2 class="center-align form-header">Create User</h2>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="name" type="text" class="validate">
                                <label for="name">Full Name</label>
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
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="postal_code" type="number" class="validate">
                                <label for="postal_code">Postnummer</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="city" type="text" class="validate">
                                <label for="city">By</label>
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
            let name = document.getElementById("name").value;
            let username = document.getElementById("username").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let postalCode = document.getElementById("postal_code").value;
            let city = document.getElementById("city").value;
            console.log("event triggered");
            registerRequest(name, username,email, password, postalCode, city);
        });
        addEventListener("keyup", (event) => {
            if (event.keyCode === 13) {
                event.preventDefault();
                let name = document.getElementById("name").value;
                let username = document.getElementById("username").value;
                let email = document.getElementById("email").value;
                let password = document.getElementById("password").value;
                let postalCode = document.getElementById("postal_code").value;
                let city = document.getElementById("city").value;
                console.log("event triggered");
                registerRequest(name, username, email, password, postalCode, city);
            }
        })
    }
}

function registerRequest(name, username, email, password, postalCode, city) {
    fetch('http://localhost:8080/a2backend/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            username: username,
            email: email,
            password: password,
            postalCode: postalCode,
            city: city
        })
    }).then(resp => {
        console.log(resp);
        if (resp.ok) {
            auth(email, password);
        }
    }).catch(err => {
        console.log(err);
    });
}

export default Register;