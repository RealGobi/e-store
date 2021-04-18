import { useContext } from 'react';
import { Routes } from './routes/Routes';
import { Navigation } from './components/navigations/Navigation';
import classNames from 'classnames';
import './App.css';
import { UserProvider } from './shared/provider/UserProvider';
import { ModeContext } from './shared/provider/ModeProvider';

export const App = () => {
	const [checked] = useContext(ModeContext);

	const theme = classNames(
    {
      'dark': checked
    }
  );
	return (
		<div className={theme}>
			<UserProvider>
					<Routes>
						<Navigation />
					</Routes>
			</UserProvider>
		</div>
	)
};