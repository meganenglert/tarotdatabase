export interface Deck {
    title: string,
    artist: string,
    type: deckType
}

export enum deckType {
    rws = "Rider-Waite-Smith",
    marseilles = "Tarot de Marseilles",
    thoth = "Thoth",
    oracle = "Oracle Cards"
}