import {BuildOptions} from "./types/config";
import type {Configuration as DevServConf} from "webpack-dev-server";

export default function buildDevServer(options: BuildOptions): DevServConf {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
    };
}