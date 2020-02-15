"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prod_env_1 = require("./prod.env");
const dev_env_1 = require("./dev.env");
function getEnvironmentVariables() {
    if (process.env.Node_Env === 'production') {
        return prod_env_1.ProdEnvironment;
    }
    return dev_env_1.DevEnvironment;
}
exports.getEnvironmentVariables = getEnvironmentVariables;
