import * as React from 'react';
import { setToLocalStorage } from '../../utils';


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

    public componentDidMount() {
        const token = window.location.hash.split('=')[1];
        if (token) {
            this.setToken(token);
        }
    }

    public render() {
        const redirectUrl = 'http://localhost:3000';
        const scope = ['read', 'write', 'account'];
        const appName = 'AntonK_React_trello';
        const key = '0d166e843bcba6197db9b3a77d4a19e3';
        const requestUrl = `https://trello.com/1/authorize?return_url=${redirectUrl}&expiration=1day&name=${appName}&scope=${scope.join(',')}&response_type=token&key=${key}`



        return <div>
            <header>
                <a href={requestUrl}>Login with trello account</a>
            </header>
            <h2>Please login</h2>
        </div>
    }
}