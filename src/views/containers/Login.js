let Login = {
    render : async () => {
        return (/*html*/`
            <div class="auth-form">
                <div class="row">
                    <form class="col s12 ">
                        <h2 class="center-align form-header">Login</h2>
                        <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">account_circle</i>
                                <input id="username" type="text" class="validate">
                                <label for="text">Username</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">lock_outline</i>
                                <input id="password" type="password" class="validate">
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <a class="submit-btn waves-effect waves-light blue btn-large">
                            <i class="material-icons left">send</i>Login
                        </a>
                        <a class="center-align" href="#" onclick='rootRender(register())'>
                            <p>Not a user? Create one here</p>
                        </a>
                    </form>
                </div>
            </div>
        `);
    },
    after_render : async () => {}
}

export default Login;