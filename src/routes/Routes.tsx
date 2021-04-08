  
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Anotherview } from '../view/Anotherview';
import { HomeView } from '../view/HomeView';


export const Routes = (props: { children?: React.ReactChild }) => {
	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route exact path={'/somewhere'} component={Anotherview} />
				<Route component={HomeView} />
			</Switch>
		</BrowserRouter>
	)
}