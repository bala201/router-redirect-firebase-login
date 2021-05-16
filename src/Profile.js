// @flow
import * as React from 'react';
import { Redirect } from 'react-router';

export function Profile({authorized}) {
    if(!authorized){
        return<Redirect to="/login"/>;
    }
  return (
    <div>
      If you are here, you are allowed to be here!!!
    </div>
  );
};