import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string,
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink className={cls.mainLink} to={RoutePath.main} theme={AppLinkTheme.SECONDARY}>{t('Главная')}</AppLink>
                <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>{t('О сайте')}</AppLink>
            </div>
        </div>
    );
};

export default Navbar;
