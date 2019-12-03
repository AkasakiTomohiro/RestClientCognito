"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const amazon_cognito_identity_js_1 = require("amazon-cognito-identity-js");
function CognitoLogin() {
    return new Promise((resolve, rejects) => {
        const userPool = new amazon_cognito_identity_js_1.CognitoUserPool({
            UserPoolId: process.env.RCC_USER_POOL_ID,
            ClientId: process.env.RCC_CLIENT_ID
        });
        const cognitoUser = new amazon_cognito_identity_js_1.CognitoUser({
            Username: process.env.RCC_USER_NAME,
            Pool: userPool
        });
        const authenticationDetails = new amazon_cognito_identity_js_1.AuthenticationDetails({
            Username: process.env.RCC_USER_NAME,
            Password: process.env.RCC_PASSWORD
        });
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess(result) {
                console.log('Login Success.');
                resolve({ token: result.getAccessToken().getJwtToken() });
            },
            onFailure(err) {
                console.error(err);
                rejects('Login Failed\r\n');
            },
            newPasswordRequired(userAttributes, requiredAttributes) {
                cognitoUser.completeNewPasswordChallenge(authenticationDetails.getPassword(), userAttributes, this);
            }
        });
    });
}
exports.CognitoLogin = CognitoLogin;
