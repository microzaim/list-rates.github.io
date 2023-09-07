import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import React from 'react'
import {observer} from 'mobx-react-lite'
import routes from '../lib/routes'
import Home from "../components/pages/Home/Home";
import Info from "../components/pages/Info/Info";

export const Router = observer(() => {
    return (
        <HashRouter basename={routes.HOME}>
            <Switch>
                <Route exact path={routes.HOME} component={Home}/>
                <Route exact path={routes.INFO} component={Info}/>
                <Redirect from="*" to={routes.HOME}/>
            </Switch>
        </HashRouter>
    )
})


