const authPort = "9090";
const userPort = "9091";
const mainPort = "9098";
const corporationPort = "8891";
const mailPort = "8080";

const version = "/api/v1";

const RestApis = {
    authService: "http://localhost:" + authPort + version,
    userService: "http://localhost:" + userPort + version,
    mainService: "http://localhost:" + mainPort + version,
    corporationService: "http://localhost:" + corporationPort + version,
    mailService: "http://localhost:" + mailPort + version,
};

export default RestApis;
