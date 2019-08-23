let Error404 = {
    render: async () => {
        return (/*html*/`
            <div class="auth-form">
               <h1>Error 404: Page not found</h1>
            </div>
        `);
    },
    after_render : async () => {}
}

export default Error404;