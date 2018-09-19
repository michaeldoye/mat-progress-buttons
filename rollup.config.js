import { uglify } from 'rollup-plugin-uglify';

export default {
    sourcemap: true,
    input: "./dist/index.js",
    output: {
        format: "umd",
        file: "./dist/bundle/index.umd.js"
    },
    name: "mat-progress-buttons",
    globals: {

    },
    plugins: [
        uglify()
    ],
    external: [

    ],
    onwarn: function (message) {
        if (/at the top level of an ES module, and has been rewritten/.test(message)) {
            return;
        }
        console.error(message);
    }
};
