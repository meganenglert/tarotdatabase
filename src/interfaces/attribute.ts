export interface Attribute {
    attribute: string;
    display: string;
    type: fieldType;
    tab: tab;
    default?: string;
    values?: string[];
}

export enum fieldType {
    text = "text",
    singleSelect = "single-select",
    multiSelect = "multi-select",
    date = "date"
}

export enum tab {
    basicInfo = "basic-info",
    art = "art",
    print = "print",
    publication = "publication"
}