console.log("Bine ai venit la cursul de JS avansat")

//JS
import A from "./clasaMea.js"
const clasaA = new A()
clasaA.myfunc()


import { sayBye, sayHi as hi } from "./utils.mjs"
sayBye("radu")
hi("radu")

import * as say from './utils.mjs';
greeting.sayHi("radu")
greeting.sayBye("radu")


//Node
const hello = require("./nodemodule")
hello()
