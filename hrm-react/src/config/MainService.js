import RestApis from "./RestApiUrls";

const mainService = {

    loginrequest: RestApis.mainService + "/main/login-request",
    getuserdetailslist: RestApis.mainService + "/main/get-user-details-list",
    usercreate: RestApis.mainService + "/main/create-user",

};

export default mainService;
