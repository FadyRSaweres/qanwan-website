// Shared Card Type
export interface IServiceCard {
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
    list1: string;
    list1En: string;
    list2: string;
    list2En: string;
    list3: string;
    list3En: string;
}

//Entity
export interface IServicesSection1 {
    id?: number;

    sectionBadgeName: string;
    sectionBadgeNameEn: string;

    sectionTitle: string;
    sectionTitleEn: string;

    sectionDescription: string;
    sectionDescriptionEn: string;
}

//Entity
export interface IServicesSection2 {
    id?: number;
    card1: IServiceCard;
    card2: IServiceCard;
    card3: IServiceCard;
    card4: IServiceCard;
}

//Entity
export interface IServicesSection3 {
    id?: number;

    sectionBadgeName: string;
    sectionBadgeNameEn: string;

    sectionTitle: string;
    sectionTitleEn: string;

    sectionDescription: string;
    sectionDescriptionEn: string;

    list1Title: string;
    list1TitleEn: string;
    list1Description: string;
    list1DescriptionEn: string;

    list2Title: string;
    list2TitleEn: string;
    list2Description: string;
    list2DescriptionEn: string;

    list3Title: string;
    list3TitleEn: string;
    list3Description: string;
    list3DescriptionEn: string;

    list4Title: string;
    list4TitleEn: string;
    list4Description: string;
    list4DescriptionEn: string;
}

//Entity
export interface IServicesSection4 {
    id?: number;

    sectionTitle: string;
    sectionTitleEn: string;

    sectionDescription: string;
    sectionDescriptionEn: string;
}