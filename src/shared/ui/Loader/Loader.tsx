import './Loader.scss';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface LoaderProps {
    className?: string,
}

const Loader: FC<LoaderProps> = ({ className }) => (
    <div className={classNames('lds-roller', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);

export default Loader;
