export interface Attribute {
    display: string;
    type: fieldType;
    tab: tab;
    values?: string[];
}

export enum fieldType {
    text = "text",
    singleSelect = "single-select",
    multiSelect = "multi-select"
}

export enum tab {
    basicInfo = "basic-info",
    art = "art",
    print = "print",
    publication = "publication"
}