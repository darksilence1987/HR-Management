const authPort = "9090";
const userPort = "9091";
const mainPort = "9098";
const corporationPort = "9096";

const version = "/api/v1";

const RestApis = {
    authService: "http://localhost:" + authPort + version,
    userService: "http://localhost:" + userPort + version,
    mainService: "http://localhost:" + mainPort + version,
    corporationService: "http://localhost:" + corporationPort + version,
};

export default RestApis;
