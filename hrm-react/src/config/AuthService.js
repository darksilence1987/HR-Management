import RestApis from "./RestApiUrls";

const authService = {
    login: RestApis.authService + "/login",
    register: RestApis.authService + "/register",

};

export default authService;
