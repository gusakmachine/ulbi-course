import type { Configuration as DevServConf } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export default function buildDevServer(options: BuildOptions): DevServConf {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
