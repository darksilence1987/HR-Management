import RestApis from "./RestApiUrls";

const userService = {

    findall: RestApis.userService + "/user/getalluserssummaryinfo",
    findbyemail: RestApis.userService + "/user/get-user-by-email",
    updateuserfromuser: RestApis.userService + "/user/updateuserfromuser/{email}",
    usercreate: RestApis.userService + "/user/usercreate",
    findAllManager: RestApis.userService + "/user/getallmanagersssummaryinfo",
    assignManager: RestApis.userService + "/user/assignmanager",
    findCompanyWorkers: RestApis.userService + "/user/companyworkers",



};

export default userService;
