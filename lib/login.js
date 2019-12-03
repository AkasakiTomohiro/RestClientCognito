"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const amazon_cognito_identity_js_1 = require("amazon-cognito-identity-js");
function CognitoLogin() {
    return new Promise((resolve, rejects) => {
        const userPool = new amazon_cognito_identity_js_1.CognitoUserPool({
            UserPoolId: process.env.USER_POOL_ID,
            ClientId: process.env.CLIENT_ID
        });
        const cognitoUser = new amazon_cognito_identity_js_1.CognitoUser({
            Username: process.env.USER_NAME,
            Pool: userPool
        });
        const authenticationDetails = new amazon_cognito_identity_js_1.AuthenticationDetails({
            Username: process.env.USER_NAME,
            Password: process.env.PASSWORD
        });
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess(result) {
                console.log(result.getAccessToken().getJwtToken());
                resolve({ token: result.getAccessToken().getJwtToken() });
            },
            onFailure(err) {
                console.error(err);
                rejects('Login Failed');
            },
            newPasswordRequired(userAttributes, requiredAttributes) {
                cognitoUser.completeNewPasswordChallenge(authenticationDetails.getPassword(), userAttributes, this);
            }
        });
    });
}
exports.CognitoLogin = CognitoLogin;
