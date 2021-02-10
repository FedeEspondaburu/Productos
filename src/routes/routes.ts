import { resolve } from "path";

const express = require('express');
export class Router{

    app = express();
    constructor(){
        this.app.get('/',this.hello)
        // this.app.post('/newProducts',this.newProducts)
        this.app.get('/getAllProducts',this.getAllProducts)
        // this.app.get('/getAllCategories',this.getAllCategories)
        // this.app.delete('/getProductsByCategory',this.productsByCategory)
        // this.app.put('/getProductsByCategory',this.productsByCategory)
    }
    hello(req:any,res:any){
    res.json("Hola")
    }
    getAllProducts(req:any,res:any){
        var products = {
            "products": {
              "product": [
                {
                  "name": "huele",
                  "surname": "aovo"
                },
                {
                  "name": "huele",
                  "surname": "raro"
                }
              ]
            }
          }
        return res.json(products);
        }
    }


module.exports = new Router().app