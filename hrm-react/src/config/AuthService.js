import RestApis from "./RestApiUrls";

const authService = {
    login: RestApis.authService + "/auth/login",
    register: RestApis.authService + "/auth/register",

};

export default authService;
