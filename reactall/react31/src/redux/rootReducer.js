import { combineReducers } from "redux";
import {messageReducer} from './Msg/message.reducer'
import {productRecuder} from './Produdct/product.reducer'

let rootReducer = 
combineReducers({"product":productRecuder, 
                  "message":messageReducer
                })
export {rootReducer} 