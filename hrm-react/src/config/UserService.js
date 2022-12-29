import RestApis from "./RestApiUrls";

const userService = {

    updateuserfromuser: RestApis.userService + "/user/updateuserfromuser/{email}",
    usercreate: RestApis.userService + "/user/usercreate",
    findAllManager: RestApis.userService + "/user/getallmanagersssummaryinfo",
    assignManager: RestApis.userService + "/user/assignmanager",
    findCompanyWorkers: RestApis.userService + "/user/companyworkers",

    findall: "http://10.8.13.78:9091/api/v1/user/getalluserssummaryinfo",
    findbyemail: "http://10.8.13.78:9091/api/v1/user/get-user-by-email",

};

export default userService;
