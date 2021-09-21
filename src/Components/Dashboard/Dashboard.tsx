import * as React from "react";
import { RouteChildrenProps } from "react-router";

interface DashboarProps extends RouteChildrenProps {
    hello?: string;
    token?: string;
}

export class Dashboard extends React.Component<DashboarProps> {

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        return <h2 onClick={this.goBack} >Hello from dashboard</h2>
    }
}