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
                                <label for="first_name">First Name</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="last_name" type="text" class="validate">
                                <label for="last_name">Last Name</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="street" type="text" class="validate">
                                <label for="street">Street address</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="city" type="text" class="validate">
                                <label for="city">City</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="postal_code" type="number" class="validate">
                                <label for="postal_code">Postal Code</label>
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
                                <input id="username" type="text" class="validate">
                                <label for="username">Username</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="password" type="password" class="validate">
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <a class="submit-btn waves-effect waves-light blue btn-large">
                            <i class="material-icons left">send</i>Create User
                        </a>
                        <a class="center-align" href="#">
                            <p>You already have a user? Click here</p>
                        </a>
                    </form>
                </div>
            </div>
        `);
    }
}

export default Register;