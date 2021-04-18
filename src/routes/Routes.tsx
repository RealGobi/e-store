  
import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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


	const blockeRouteIfAuth = (navToViewIfAuth: React.FC) => {
 		return auth ? HomeView : navToViewIfAuth;
	};

	const authNeeded = (navToViewIfAuth: React.FC) => {
 		return auth ? navToViewIfAuth : LoginView;
	};

	
	return (
		<BrowserRouter>
			{children}
			<Switch>
				<Route exact path={RoutingPath.LoginView} component={blockeRouteIfAuth(LoginView)} />
				<Route exact path={RoutingPath.NewsView} component={NewsView} />
				<Route exact path={RoutingPath.GalleryView} component={GalleryView} />
				<Route exact path={RoutingPath.ShopView} component={ShopView} />
				<Route exact path={RoutingPath.ProfileView} component={authNeeded(ProfileView)} />
				<Route exact path={RoutingPath.SavedView} component={authNeeded(SavedView)} />
				<Route exact path={RoutingPath.SettingView} component={authNeeded(SettingView)} />
				<Route component={HomeView} />
			</Switch>
		</BrowserRouter>
	)
}