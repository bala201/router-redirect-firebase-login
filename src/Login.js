// @flow
import * as React from 'react';
import { useHistory } from 'react-router';

export function Login() {
    let history=useHistory();
  return (
    <div>
      <input type="text" placeholder="username"/>
      <input type="text" placeholder="password"/>
      <button onClick={()=>{history.push("/profile")}}>Login</button>
    </div>
  );
};