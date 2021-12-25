export interface Deck {
    title: string,
    author: string,
    artist: string,
    type: deckType,
    numcards: number,
    guidebook: guidebookType[],
    genre: genreType[]
    minorarcana: minorArcanaType,
    cws: cwType[],
    style: styleType[],
    subjects: subjectType[],
    medium: mediumType[],
    borders: borderType,
    palette: paletteType,
    colors: colorType[],
    diversity: diversityType[],
    nsfw: nsfwType,
    storage: storageType[],
    size: sizeType,
    material: materialType,
    finish: finishType,
    gilding: gildingType[],
    publisher: string,
    date: string,
    language: languageType[],
    isbn: string,
    retailers: retailerType[],
    inprint: inPrintType[]
}

export enum inPrintType {
    inPrint = "In-Print",
    prePrint = "Pre-Print",
    between = "Between Prints",
    outOfPrint = "Out of Print"
}

export enum retailerType {
    personal = "Artist's Website",
    etsy = "Etsy",
    amazon = "Amazon",
    target = "Target",
    bnn = "Barnes and Noble",
    onlineTarot = "Online Tarot Retailer",
    inPerson = "Other In-Person Retailer"
}

export enum languageType {
    english = "English", 
    afrikaans = "Afrikaans", 
    albanian = "Albanian", 
    arabic = "Arabic", 
    armenian = "Armenian", 
    basque = "Basque", 
    bengali = "Bengali", 
    bulgarian = "Bulgarian", 
    catalan = "Catalan", 
    mandarin = "Chinese (Mandarin)", 
    croatian = "Croatian", 
    czech = "Czech", 
    danish = "Danish", 
    dutch = "Dutch", 
    estonian = "Estonian", 
    fiji = "Fiji", 
    finnish = "Finnish", 
    french = "French", 
    georgian = "Georgian", 
    german = "German", 
    greek = "Greek", 
    gujarati = "Gujarati", 
    hebrew = "Hebrew", 
    hindi = "Hindi", 
    hungarian = "Hungarian", 
    icelandic = "Icelandic", 
    irish = "Irish", 
    italian = "Italian", 
    japanese = "Japanese", 
    javanese = "Javanese", 
    korean = "Korean", 
    latin = "Latin", 
    latvian = "Latvian", 
    lithuanian = "Lithuanian", 
    macedonian = "Macedonian", 
    malay = "Malay", 
    malayalam = "Malayalam", 
    maltese = "Maltese", 
    maori = "Maori", 
    marathi = "Marathi", 
    mongolian = "Mongolian", 
    nepali = "Nepali", 
    norwegian = "Norwegian", 
    persian = "Persian", 
    polish = "Polish", 
    portuguese = "Portuguese", 
    punjabi = "Punjabi", 
    quechua = "Quechua", 
    romanian = "Romanian", 
    russian = "Russian", 
    samoan = "Samoan", 
    serbian = "Serbian", 
    slovak = "Slovak", 
    slovenian = "Slovenian", 
    spanish = "Spanish", 
    swahili = "Swahili", 
    swedish = "Swedish", 
    tamil = "Tamil", 
    tatar = "Tatar", 
    telugu = "Telugu", 
    thai = "Thai", 
    tibetan = "Tibetan", 
    tonga = "Tonga", 
    turkish = "Turkish", 
    ukranian = "Ukranian", 
    urdu = "Urdu", 
    uzbek = "Uzbek", 
    vietnamese = "Vietnamese", 
    welsh = "Welsh", 
    xhosa = "Xhosa"
}

export enum gildingType {
    back = "Card Back",
    front = "Card Front",
    edge = "Card Edges",
    none = "None"
}

export enum finishType {
    glossy = "Glossy",
    matte = "Matte",
    linen = "Linen"
}

export enum materialType {
    cardstock = "Cardstock",
    plastic = "Plastic"
}

export enum sizeType {
    xs = "Mini",
    s = "Playing Cards",
    m = "Standard Tarot",
    l = "Large"
}

export enum storageType {
    box = "Bow",
    bag = "Bag",
    tin = "Tin",
    none = "None"
}

export enum nsfwType {
    sfw = "SFW",
    nudity = "Nudity",
    sex = "Sex"
}

export enum diversityType {
    black = "Black Representation", 
    latinx = "Latinx Representation", 
    asian = "Asian Representation", 
    nb = "Non-Binary Representation", 
    trans = "Transgender Representation", 
    woman = "Woman Representation", 
    gay = "Gay Representation", 
    lesbian = "Lesbian Representation", 
    bi = "Bisexual Representation"
}

export enum colorType {
    red = "Red",
    orange = "Orange",
    yellow = "Yellow",
    green = "Green",
    blue = "Blue",
    purple = "Purple",
    white = "White",
    gray = "Gray",
    black = "Black",
    silver = "Silver",
    gold = "Gold",
    brown = "Brown"
}

export enum paletteType {
    bw = "Black and White",
    warm = "Warm",
    cool = "Cool",
    earthy = "Earthy",
    pastel = "Pastel",
    muted = "Muted",
    dark = "Dark",
    bright = "Bright"
}

export enum borderType {
    bordered = "Bordered",
    borderless = "Borderless"
}

export enum mediumType {
    graphic = "Graphic Design",
    ink = "Ink Drawing",
    needlepoint = "Needlepoint",
    painting = "Painting",
    sketch = "Pencil Sketch",
    photography = "Photography",
    watercolor = "Watercolor"
}

export enum subjectType {
    animals = "Animals",
    children = "Children",
    crafting = "Crafting",
    flowers = "Flowers",
    ghosts = "Ghosts",
    herbalism = "Herbalism",
    lc = "Licensed Content",
    people = "People",
    plants = "Plants",
    space = "Space",
    tech = "Technology",
    tattoos = "Tattoos"
}

export enum styleType {
    abstract = "Abstract",
    drawn = "Hand-Drawn",
    vintage = "Vintage",
    traditional = "Traditional Tarot",
    surrealist = "Surrealist"
}

export enum cwType {
    gore = "Blood/Gore",
    assault = "Sexual Assault",
    animal = "Animal Cruelty",
    sh = "Self Harm",
    suicide = "Suicide",
    ed = "Eating Disorders"
}

export enum minorArcanaType {
    full = "Full Art",
    some = "Some Art",
    pips = "Pip Card",
    na = "N/A"
}

export enum genreType {
    abstract = "Abstract",
    rws = "Traditional RWS",
    contemporary = "Contemporary",
    fantasy = "Fantasy",
    horror = "Horror",
    scifi = "Science Fiction"
}

export enum deckType {
    rws = "Rider-Waite-Smith",
    marseilles = "Tarot de Marseilles",
    thoth = "Thoth",
    oracle = "Oracle"
}

export enum guidebookType {
    included = "Included",
    paid = "Available (Paid)",
    free = "Available (Free)", 
    unofficial = "Unofficial Guide",
    none = "None"
}