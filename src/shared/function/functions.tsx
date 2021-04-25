


export const blockeRouteIfAuth = (auth: string, HomeView: React.FC, navToViewIfAuth: React.FC) => {
    return auth ? HomeView : navToViewIfAuth;
 };

 export const authNeeded = (auth: string, LoginView: React.FC, navToViewIfAuth: React.FC) => {
    return auth ? navToViewIfAuth : LoginView;
 };