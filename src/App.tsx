import { useContext } from 'react';
import { Routes } from './routes/Routes';
import { Navigation } from './components/navigations/Navigation';
import classNames from 'classnames';
import { UserProvider } from './shared/provider/UserProvider';
import { ModeContext } from './shared/provider/ModeProvider';
import { StarShipProvider } from './shared/provider/StarShipApiProvider';
import { PlanetsProvider } from './shared/provider/PlanetsProvider';
import './App.css';

export const App = () => {
	const [checked] = useContext(ModeContext);

	const theme = classNames(
    {
      'dark': checked
    }
  );
	return (
		<div style={{paddingBottom:'10px'}} className={theme}>
			<UserProvider>
				<StarShipProvider>
					<PlanetsProvider>
					<Routes>
						<Navigation />
					</Routes>
					</PlanetsProvider>
				</StarShipProvider>
			</UserProvider>
		</div>
	)
};