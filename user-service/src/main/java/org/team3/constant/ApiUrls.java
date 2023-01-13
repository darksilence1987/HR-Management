package org.team3.constant;

public class ApiUrls {

    public static final String VERSION="/api/v1";
    public static final String AUTH=VERSION+"/auth";
    public static final String USER=VERSION+"/user";
    public static final String PERMISSION=VERSION+"/permission";
    public static final String EXPENSE=VERSION+"/expense";

    public static final String SAVE =  "/save";
    public static final String USERCREATE =  "/usercreate";
    public static final String UPDATEUSERFROMUSER =  "/updateuserfromuser/{email}";
    public static final String UPDATEUSERFROMMANAGER =  "/updateuserfrommanager/{email}";
    public static final String GETALLUSERSSUMMARYINFO =  "/getalluserssummaryinfo";
    public static final String GETALLMANAGERSSSUMMARYINFO =  "/getallmanagersssummaryinfo";
    public static final String ASSIGNMANAGER =  "/assignmanager";
    public static final String PERMISSIONCREATE =  "/permissioncreate";
    public static final String PERMISSIONREJECTED =  "/permissionrejected";
    public static final String PERMISSIONCONFIRMED =  "/permissionconfirmed";
    public static final String ALLPPERMISSIONS =  "/allpermissions";
    public static final String ALLFINALIZEDPERMISSIONS =  "/allfinalizedpermissions";
    public static final String GET_ALL_BY_USER_EMAIL = "/getallbyuseremail";







    public static final String EXPENSE_CREATE = "/expensecreate";
    public static final String EXPENSE_REJECTED = "/expenserejected";
    public static final String EXPENSE_CONFIRMED = "/expenseconfirmed";
    public static final String GET_ALL_EXPENSES_OF_USER = "/getallexpenses-user";
    public static final String GET_ALL_EXPENSES_OF_CORPORATION = "/getallexpenses-corporation";
    public static final String ALLFINALIZED_EXPENSES = "/allfinalizedexpenses";

    public static final String FINDBYID =  "/findbyid";
    public static final String GETALL =  "/getall";
    public static final String COMPANYWORKERS =  "/companyworkers";
    public static final String MANAGERSEMPLOYERS =  "/managersemployers";





}
