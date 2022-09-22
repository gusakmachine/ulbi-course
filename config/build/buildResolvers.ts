import webpack from 'webpack';
import { BuildOptions } from './types/config';

export default function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {},
        preferAbsolute: true,
        modules: [
            options.paths.src, 'node_modules',
        ],
        mainFiles: ['index'],
    };
}
