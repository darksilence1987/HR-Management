const authPort = "9090";
const userPort = "9091";
const version = "/api/v1";

const RestApis = {
    authService: "http://localhost:" + authPort + version,
    userService: "http://localhost:" + userPort + version,
};

export default RestApis;
