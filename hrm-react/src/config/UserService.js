import RestApis from "./RestApiUrls";

const userService = {

    findall: RestApis.userService + "/getalluserssummaryinfo",
    findbyemail: RestApis.userService + "/get-user-by-email",
    updateuserfromuser: RestApis.userService + "/updateuserfromuser/{email}",
    usercreate: RestApis.userService + "/usercreate",
    findAllManager: RestApis.userService + "/getallmanagersssummaryinfo",
    assignManager: RestApis.userService + "/assignmanager",
    findCompanyWorkers: RestApis.userService + "/companyworkers",
    managersEmployers: RestApis.userService + "/managersemployers",


    permissionCreate: RestApis.userService + "/permissioncreate",
    findAllPermission: RestApis.userService + "/allpermissions",
    findAllFinalizedPermission: RestApis.userService + "/allfinalizedpermissions",
    permissionConfirmed: RestApis.userService + "/permissionconfirmed",
    permissionRejected: RestApis.userService + "/permissionrejected",


    expenseCreate: RestApis.userService + "/expensecreate",
    expenseRejected: RestApis.userService + "/expenserejected",
    expenseConfirmed: RestApis.userService + "/expenseconfirmed",
    findAllFinalizedExpense: RestApis.userService + "/allfinalizedexpenses",
    findAllExpense: RestApis.userService + "/getallexpenses-user",




};

export default userService;
