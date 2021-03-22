import React from 'react';
import {observer} from "mobx-react";

const LoginPage = observer(({loginPageState}) => {
    return (<div>
        <div>{loginPageState.count}</div>
        <button onClick={loginPageState.incCount}>Add</button>
    </div>);
})
export {LoginPage};