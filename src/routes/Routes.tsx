  
import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { authNeeded, blockeRouteIfAuth } from '../shared/function/functions';
import { ModeContext } from '../shared/provider/ModeProvider';
import { UserContext } from '../shared/provider/UserProvider';
import { HomeView } from '../view/HomeView';
import { GalleryView } from '../view/navigationTapviews/GalleryView';
import { LoginView } from '../view/navigationTapviews/LoginView';
import { NewsView } from '../view/navigationTapviews/NewsView';
import { ShopView } from '../view/navigationTapviews/ShopView';
import { ProfileView } from '../view/Profile-Dropdown-views/ProfileView';
import { SavedView } from '../view/Profile-Dropdown-views/SavedView';
import { SettingView } from '../view/Profile-Dropdown-views/SettingView';
import RoutingPath from './RoutingPath';


export const Routes = (props: { children?: React.ReactChild }) => {
	const { children } = props;
	const [auth, setAuth] = useContext(UserContext);
	const [, setChecked] = useContext(ModeContext)

	useEffect(() => {
		const loc = localStorage.getItem('username');
		const theme = localStorage.getItem('theme');
			if (loc) {
				setAuth(loc);
				setChecked(theme);
			}
	},[setAuth, setChecked]);

	return (
		<BrowserRouter>
			{children}
			<Switch>
				<Route exact path={RoutingPath.LoginView} component={blockeRouteIfAuth(auth, HomeView, LoginView)} />
				<Route exact path={RoutingPath.NewsView} component={authNeeded(auth, LoginView, NewsView)} />
				<Route exact path={RoutingPath.GalleryView} component={authNeeded(auth, LoginView, GalleryView)} />
				<Route exact path={RoutingPath.ShopView} component={authNeeded(auth, LoginView, ShopView)} />
				<Route exact path={RoutingPath.ProfileView} component={authNeeded(auth, LoginView, ProfileView)} />
				<Route exact path={RoutingPath.SavedView} component={authNeeded(auth, LoginView, SavedView)} />
				<Route exact path={RoutingPath.SettingView} component={authNeeded(auth, LoginView, SettingView)} />
				<Route component={authNeeded(auth, LoginView, HomeView)} />
			</Switch>
		</BrowserRouter>
	)
}