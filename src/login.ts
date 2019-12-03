import { CognitoUserPool, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';

export function CognitoLogin(): Promise<{ token: string }> {
  return new Promise<{ token: string }>((resolve, rejects) => {
    const userPool = new CognitoUserPool({
      UserPoolId: process.env.USER_POOL_ID as string,
      ClientId: process.env.CLIENT_ID as string
    });

    const cognitoUser = new CognitoUser({
      Username: process.env.USER_NAME as string,
      Pool: userPool
    });

    const authenticationDetails = new AuthenticationDetails({
      Username: process.env.USER_NAME as string,
      Password: process.env.PASSWORD as string
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
