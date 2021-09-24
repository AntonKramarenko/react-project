import React, { FunctionComponent } from "react"
import { Redirect, RouteChildrenProps } from "react-router"


interface OAuthProps extends RouteChildrenProps {
    onSetToken: (token: string) => void;
}

export const OAuth: FunctionComponent<OAuthProps> = ({ location: { hash }, onSetToken }: OAuthProps) => {
    const token = hash.split('=')[1];

    onSetToken(token)
    return <Redirect to={'/dashboard'} />
}