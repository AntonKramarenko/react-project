import React, { FunctionComponent } from 'react';
import { RouteChildrenProps } from 'react-router-dom';

export const OAuth: FunctionComponent<RouteChildrenProps> = (props: RouteChildrenProps) => {
    console.log(props)
    return <h2>OAUTH</h2>
}