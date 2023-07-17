import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import FormReducer from "./FormReducer";



let reducers=combineReducers({
    form:formReducer,
    Data:FormReducer,
})

const store=createStore(reducers,applyMiddleware(thunk));
window.store=store;

export default store;



