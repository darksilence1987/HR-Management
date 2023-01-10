import RestApis from "./RestApiUrls";

const corporationService = {


    findall: RestApis.corporationService + "/getallcorporationssummaryinfo",
    createCorporation: RestApis.corporationService + "/corporationcreate",

};

export default corporationService;