import cls from './Navbar.module.scss';
import {RoutePath} from "shared/config/routeConfig";
import {classNames} from "shared/lib/classNames/classNames";
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string,
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink className={cls.mainLink} to={RoutePath.main} theme={AppLinkTheme.SECONDARY}>Main</AppLink>
                <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>About</AppLink>
            </div>
        </div>
    );
};

export default Navbar;