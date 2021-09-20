import * as React from 'react';
import { Route, Link } from 'react-router-dom';
// import { isThisTypeNode } from 'typescript';
import { getFromLocalStorage, setToLocalStorage } from '../../utils';
import { Dashboard } from '../Dashboard';
import { Login } from '../Login';






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


    private async setToken(token: string) {
        this.setState({ token });
        await setToLocalStorage(TOKEN_STORAGE_KEY, token);

    }

    private async getToken() {
        const token = await getFromLocalStorage(TOKEN_STORAGE_KEY);
        return token;
    }

    private getTokenFromUrl() {
        return window.location.hash.split('=')[1];
    }

    private isLoggedIn() {
        return !!this.state.token
    }


    private renderHeader() {
        return <header>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/'>Home</Link>
        </header>
    }

    private renderContent() {
        return <main>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" exact={true} component={Login} />

            <h2>Test</h2>
        </main>
    }


    public async componentDidMount() {

        const newToken = this.getTokenFromUrl();
        this.setToken(newToken)
    }

    public render() {
        return <div>
            {this.renderHeader()}
            {this.renderContent()}
        </div>
    }
}