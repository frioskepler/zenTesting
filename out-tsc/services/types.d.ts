interface UserGroup {
    ugp_Id: number;
    ugp_Name: string;
    ugp_Mnemo: string;
}
interface UserInfo {
    usr_Id: number;
    usr_First_Name: string;
    usr_Last_Name: string;
    usr_Published_Name: string;
    usr_JobTitle_Name: string;
    usr_JobTitle_Name_Deu: string;
    usr_JobTitle_Name_Fi: string | null;
    usr_JobTitle_Name_Fr: string;
    usr_Telephone_Number: string;
    usr_Email: string;
    usr_IsActive: boolean;
    usr_Login: string;
    dep_Id: number;
    usr_Biography: string;
    usr_IsVisible_Web: boolean;
    userGroupList: UserGroup[];
}
interface ReasonContent {
    contentId: number;
    contentName: string;
    contentOrderId: number;
}
interface ReasonCategory {
    categoryId: number;
    categoryName: string;
    categoryType: string;
    categoryOrderId: number;
    reasonContents: ReasonContent[];
}
interface DocumentTypeResponse {
    documentTypeId: number;
    documentTypeName: string;
    documentTypeRadix: string;
    reasonCategories: ReasonCategory[];
}
