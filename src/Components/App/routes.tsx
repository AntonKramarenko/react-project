import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Login } from '../Login';
import { Dashboard } from '../Dashboard';
import { NotFound } from '../NotFound/NotFound';
import { RouteChildrenProps } from "react-router";
import { OAuth } from '../OAuth';


export interface AppRoute {
    path: string;
    render: (props: any) => any;
    title?: string;
    isHidden?: boolean;
    exact?: boolean;
    isProtected?: boolean


}

export const routes: Array<AppRoute> = [
    {
        path: '/login',
        render: (props: any) => <Login {...props} />,
        title: 'Login'
    },
    {
        path: '/dashboard',
        title: 'Dashboard',
        isProtected: true,
        render: (props: RouteChildrenProps) => <Dashboard {...props} />
    },
    {
        path: '/',
        isHidden: true,
        exact: true,
        render: () => <Redirect to='/login' />,

    },
    {
        path: '/404',
        isHidden: true,
        render: (props: RouteChildrenProps) => <NotFound {...props} />,
        title: 'Dashboard'
    },


]