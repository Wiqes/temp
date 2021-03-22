import {action, configure, observable} from "mobx";

configure({enforceActions:true});

const loginPageState = observable({count:0, incCount: action(()=>{loginPageState.count+=1; })});

export {loginPageState};