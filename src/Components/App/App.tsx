import * as React from 'react';
import { Route, Link, RouteComponentProps, Redirect, Switch, RouteChildrenProps } from 'react-router-dom';
// import { isThisTypeNode } from 'typescript';
import { getFromLocalStorage, setToLocalStorage } from '../../utils';
import { Dashboard } from '../Dashboard';
// import { routes } from './routes';
// import { AppRoute } from './routes'
import { routes } from './routes';
import { AppRoute } from '../App/routes'
import { OAuth } from '../OAuth';



const TOKEN_STORAGE_KEY = 'TOKEN';

interface Board {
    id: string;
    name: string;
    pinned: boolean;
    desk?: string;
}

interface AppState {
    token: string;
    boards: Array<Board>
}

export class App extends React.Component<any, AppState> {
    public state = {
        token: '',
        boards: []
    }


    private setToken = (token: string) => {
        this.setState({ token });
    }


    private isLoggedIn() {
        return !!this.state.token
    }


    private renderHeader() {
        return <header>
            {routes.map((route: AppRoute, i: number) => route.isHidden ? null : <Link key={i} to={route.path}>{route.title}</Link>)}
        </header>
    }

    private renderContent() {
        return <main>
            <Switch>
                {routes.map((route: any, i: number) => <Route
                    exact={route.exact}
                    key={i} path={route.path}
                    render={(props) => route.render({ ...props })} />
                )}

                <Route path='/oauth' render={(props: RouteChildrenProps) => <OAuth {...props} onSetToken={this.setToken} />} />
                <Redirect to='/404' />
            </Switch>
        </main>
    }

    public render() {
        return <div>
            {this.renderHeader()}
            {this.renderContent()}
        </div>
    }
}