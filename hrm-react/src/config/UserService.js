import RestApis from "./RestApiUrls";

const userService = {

    findall: RestApis.userService + "/user/findall",
    findbyemail: RestApis.userService + "/user/findbyemail",
};

export default userService;
