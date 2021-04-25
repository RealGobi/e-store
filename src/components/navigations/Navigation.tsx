import { DesktopNavigation } from './DesktopNavigation';
import { useWindowDimension } from '../../shared/hooks/useWindowDimension';
import { MobileNavigation } from './MobileNavigation';

export const Navigation = () => {
	const { width } = useWindowDimension();

	const displayNavigation = () => {
		return width <= 1000 ? <MobileNavigation /> : <DesktopNavigation />
	};
		return (displayNavigation());
}