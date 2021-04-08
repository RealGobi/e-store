  
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeView } from '../view/HomeView';
import { galleryView } from '../view/navigationTapviews/galleryView';
import { loginView } from '../view/navigationTapviews/loginView';
import { newsView } from '../view/navigationTapviews/newsView';
import { shopView } from '../view/navigationTapviews/shopView';
import RoutingPath from './RoutingPath';


export const Routes = (props: { children?: React.ReactChild }) => {
	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route exact path={RoutingPath.loginView} component={loginView} />
				<Route exact path={RoutingPath.newsView} component={newsView} />
				<Route exact path={RoutingPath.galleryView} component={galleryView} />
				<Route exact path={RoutingPath.shopView} component={shopView} />
				<Route component={HomeView} />
			</Switch>
		</BrowserRouter>
	)
}