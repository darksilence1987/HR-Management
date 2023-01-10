import RestApis from "./RestApiUrls";

const mainService = {

    loginrequest: RestApis.mainService + "/login-request",
    getuserdetailslist: RestApis.mainService + "/get-user-details-list",
    usercreate: RestApis.mainService + "/create-user",
    requestPassword: RestApis.mainService + "/request-password",

};

export default mainService;
