import RestApis from "./RestApiUrls";

const userService = {

    findall: RestApis.userService + "/user/getalluserssummaryinfo",
    findbyemail: RestApis.userService + "/user/get-user-by-email",
    updateuserfromuser: RestApis.userService + "/user/updateuserfromuser/{email}",
    usercreate: RestApis.userService + "/user/usercreate",
    findAllManager: RestApis.userService + "/user/getallmanagersssummaryinfo",
    assignManager: RestApis.userService + "/user/assignmanager",
    findCompanyWorkers: RestApis.userService + "/user/companyworkers",
    managersEmployers: RestApis.userService + "/user/managersemployers",




    permissionCreate: RestApis.userService + "/permission/permissioncreate",
    findAllPermission: RestApis.userService + "/permission/allpermissions",
    findAllFinalizedPermission: RestApis.userService + "/permission/allfinalizedpermissions",
    permissionConfirmed: RestApis.userService + "/permission/permissionconfirmed",
    permissionRejected: RestApis.userService + "/permission/permissionrejected",





    expenseCreate: RestApis.userService + "/expense/expensecreate",
    expenseRejected: RestApis.userService + "/expense/expenserejected",
    expenseConfirmed: RestApis.userService + "/expense/expenseconfirmed",
    findAllFinalizedExpense: RestApis.userService + "/expense/allfinalizedexpenses",
    findAllExpense: RestApis.userService + "/expense/getallexpenses-user",




};

export default userService;
