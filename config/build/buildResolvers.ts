import webpack from "webpack";

export default function buildResolvers(): webpack.ResolveOptions {
    return {
        extensions: ['.js', '.ts', '.tsx',],
    };
}