const Express = require('express')


class App{
    app = Express();
    port: number = 3000;
    constructor(){
        this.app.use(require('body-parser').json())
        this.app.use(require('body-parser').urlencoded({ extended: true }));
        this.database()
       this.routes()
        this.app.listen(process.env.PORT || this.port,() => {
            console.log(`Listening Port ${this.port || process.env.PORT }`)
        })
    }


    routes(){
        this.app.use(require('../src/routes/routes.ts'))
    }

    database(){
        console.log('fede ataque')
    }
}

new App();