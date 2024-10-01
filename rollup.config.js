"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_typescript_1 = __importDefault(require("@rollup/plugin-typescript"));
exports.default = {
    input: 'js/index.ts',
    output: {
        dir: 'js',
        format: 'cjs'
    },
    plugins: [(0, plugin_typescript_1.default)()]
};
