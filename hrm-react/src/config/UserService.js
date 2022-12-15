import RestApis from "./RestApiUrls";

const userService = {

    findall: RestApis.userService + "/user/getalluserssummaryinfo",
    findbyemail: RestApis.userService + "/user/get-user-by-email",
    updateuserfromuser: RestApis.userService + "user/updateuserfromuser/{email}",



};

export default userService;
