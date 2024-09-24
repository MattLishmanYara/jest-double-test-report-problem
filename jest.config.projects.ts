/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import {Config} from "jest";

export default {
    projects: [
        `./src/one`,
        `./src/two`
    ],
} satisfies Config;

