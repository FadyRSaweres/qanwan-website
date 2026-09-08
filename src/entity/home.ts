// Shared Card type
export interface IHomeCard {
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
}

//Entity
export interface IHomeSection1 {
    id?: number;

    sectionBadgeName: string;
    sectionBadgeNameEn: string;

    sectionTitle: string;
    sectionTitleEn: string;

    sectionDescription: string;
    sectionDescriptionEn: string;

    firstCountTitle: string;
    firstCountTitleEn: string;
    firstCountNumber: string;

    secondCountTitle: string;
    secondCountTitleEn: string;
    secondCountNumber: string;

    thirdCountTitle: string;
    thirdCountTitleEn: string;
    thirdCountNumber: string;
}



//Entity
export interface IHomeSection2 {
    id: number;
    sectionBadgeName: string;
    sectionBadgeNameEn: string;
    sectionTitle: string;
    sectionTitleEn: string;
    sectionDescription: string;
    sectionDescriptionEn: string;
    card1: IHomeCard;
    card2: IHomeCard;
    card3: IHomeCard;
    card4: IHomeCard;
}

//Entity
export interface IHomeSection3 {
    id: number;

    sectionBadgeName: string;
    sectionBadgeNameEn: string;

    sectionTitle: string;
    sectionTitleEn: string;

    sectionDescription: string;
    sectionDescriptionEn: string;

    card1: IHomeCard;
    card2: IHomeCard;
    card3: IHomeCard;
    card4: IHomeCard;

    count1Title: string;
    count1TitleEn: string;
    count1Number: string;

    count2Title: string;
    count2TitleEn: string;
    count2Number: string;

    count3Title: string;
    count3TitleEn: string;
    count3Number: string;

    count4Title: string;
    count4TitleEn: string;
    count4Number: string;
}

//Entity
export interface IHomeSection4 {
    id: number;

    sectionBadgeName: string;
    sectionBadgeNameEn: string;

    sectionTitle: string;
    sectionTitleEn: string;

    sectionDescription: string;
    sectionDescriptionEn: string;

    card1Title: string;
    card1TitleEn: string;
    card1Description: string;
    card1DescriptionEn: string;

    card2Title: string;
    card2TitleEn: string;
    card2Description: string;
    card2DescriptionEn: string;

    card3Title: string;
    card3TitleEn: string;
    card3Description: string;
    card3DescriptionEn: string;

    list1Title: string;
    list1TitleEn: string;
    list1Number: string;

    list2Title: string;
    list2TitleEn: string;
    list2Number: string;

    list3Title: string;
    list3TitleEn: string;
    list3Number: string;

    list4Title: string;
    list4TitleEn: string;
    list4Number: string;
}

// Entity
export interface IHomeSection5 {
    id?: number;

    sectionTitle: string;
    sectionTitleEn: string;

    sectionDescription: string;
    sectionDescriptionEn: string;
}
