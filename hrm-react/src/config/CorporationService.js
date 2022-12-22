import RestApis from "./RestApiUrls";

const corporationService = {


    findall: RestApis.corporationService + "/corporation/getallcorporationssummaryinfo",
    createCorporation: RestApis.corporationService + "/corporation/corporationcreate",

};

export default corporationService;