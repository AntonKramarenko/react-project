import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Login } from '../Login';
import { Dashboard } from '../Dashboard';
import { NotFound } from '../NotFound/NotFound';
import { RouteChildrenProps } from "react-router";
import { OAuth } from '../OAuth';

export enum ROUTES_URLS {
    HOME = '/',
    LOGIN = '/signin',
    DASHBOARD = '/dashboard',
    OAUTH = '/oauth',
    NOT_FOUND = '/404'
}


export interface AppRoute {
    path: ROUTES_URLS;
    render: (props: any) => any;
    title?: string;
    isHidden?: boolean;
    exact?: boolean;
    isProtected?: boolean


}

export const routes: Array<AppRoute> = [
    {
        path: ROUTES_URLS.LOGIN,
        render: (props: any) => <Login {...props} />,
        title: 'Login'
    },
    {
        path: ROUTES_URLS.DASHBOARD,
        title: 'Dashboard',
        isProtected: true,
        render: (props: RouteChildrenProps) => <Dashboard {...props} />
    },
    {
        path: ROUTES_URLS.HOME,
        isHidden: true,
        exact: true,
        render: () => <Redirect to={ROUTES_URLS.LOGIN} />,

    },
    {
        path: ROUTES_URLS.NOT_FOUND,
        isHidden: true,
        render: (props: RouteChildrenProps) => <NotFound {...props} />,
    },


]