var commands = {
	'whatTimeIsIt' : {
		description: {
			'en': "What time is it?",
			'de': "Wie spät ist das?",
			'ru': "Сколько время?"
		},
        invisible: true,
		unique:   true,
		editable: false,
		words: {
			'en': "time is it",
			'de': "zeit/spät",
			'ru': "сколько время"
		}
	},
	'whatIsYourName' : {
		description: {
			'en': "What is your name?",
			'de': "Wie heißt du?",
			'ru': "Как тебя зовут?"
		},
        invisible: true,
		unique:   true,
		editable: false,
		words: {
			'en': "your name",
			'de': "heißt du",
			'ru': "тебя зовут"
		}
	},
	'outsideTemperature' : {
		description: {
			'en': "What is the outside temperature?",
			'de': "Wie kalt/warm ist draußen?",
			'ru': "Какая температура на улице?"
		},
		unique:   true,
		editable: false,
		words: {
			'en': "outside temperature",
			'de': "aussen/draußen temperatur",
			'ru': "температура"
		},
		arg1: {
			'en': "Outside temperature ID",
			'de': "Außentemperatur ID",
			'ru': "ID сенсора на улице '.TEMPERATURE'"
		}
	},	
	'insideTemperature' : {
		description: {
			'en': "What is the inside temperature?",
			'de': "Wie kalt/warm ist drin?",
			'ru': "Какая температура дома?"
		},
		unique:   true,
		editable: false,
		words: {
			'en': "inside temperature",
			'de': "intern/drin temperatur",
			'ru': "температура дома/внутри/квартире"
		},
        arg1: {
			'en': "Inside temperature ID",
			'de': "Innentemperature ID",
			'ru': "ID сенсора дома '.TEMPERATURE'"
		}
	},
    'roleOnOff': {
        description: {
            'en': "Switch role on/off",
            'de': "Schalte Gewerk an oder aus",
            'ru': "Включить/выключить приборы"
        },
        unique:   true,
        editable: false,
        words: {
            'en': "switch on/off",
            'de': "einschalten/ausschalten/ein/aus/an",
            'ru': "ключи/включи/включить/выключи/выключить/потушить/потуши/зажги/зажечь"
        },
        ack:  {
            'en': "If acknowledge must be spoken",
            'de': "Ob Ergebniss gesprochen werden soll",
            'ru': "Проговорить команду"
        }
    },
    'blindsUpDown': {
        description: {
            'en': "Open/close blinds",
            'de': "Rollladen auf/zu machen",
            'ru': "Поднять опустить ставни"
        },
        unique:   true,
        editable: false,
        words: {
            'en': "blinds up/down",
            'de': "rollladen/rolllade auf/zu/hoch/runter",
            'ru': "ставни/окно/окна поднять/подними/опустить/опусти/открой/открою/открыть/закрою/закрыть/закрой"
        },
        ack:  {
            'en': "If acknowledge must be spoken",
            'de': "Ob Ergebniss gesprochen werden soll",
            'ru': "Проговорить команду"
        }
    },
    'userDeviceControl' : {
        description: {
            'en': "Switch something on/off",
            'de': "Schalte irgendwas an oder aus",
            'ru': "Что нибудь включить/выключить"
        },
        unique:   false,
        editable: true,
        arg1: {
            'en': "Device or variable ID",
            'de': "Gerät- oder Variablen- ID",
            'ru': "ID сенсора или переменной"
        },
        arg2: {
            'en': "Value to write down",
            'de': "Wert zu schreiben",
            'ru': "Записываемое значение"
        }
    },
    'userProgramExec' : {
        description: {
            'en': "Execute program on CCU",
            'de': "Porgramm ausfühen auf CCU",
            'ru': "Выпролнить программу на CCU"
        },
        unique:   false,
        editable: true,
        arg1: {
            'en': "Program ID",
            'de': "Programm-ID",
            'ru': "ID программы"
        }
    },
    'goodBoy' : {
        description: {
            'en': "You are good",
            'de': "Du bist gut",
            'ru': "Молодец"
        },
        invisible: true,
        unique:   true,
        editable: false,
        words: {
            'en': "good",
            'de': "gut",
            'ru': "молодец/хорошая/хороший"
        }
    },
    'thankYou' : {
        description: {
            'en': "Thank you",
            'de': "Danke",
            'ru': "Спасибо"
        },
        invisible: true,
        unique:   true,
        editable: false,
        words: {
            'en': "thank",
            'de': "danke",
            'ru': "спасибо"
        },
        ack: {
            'en': ["No problem", "You are welcome"],
            'de': ["Kein problem", "Bitte", "Bitte sehr"],
            'ru': ["Пожалуйста", "Всегда пожалуйста", "Не за что", "С радостью"]
        }
    }
};

// Translations for rooms
var rooms = {
    "livingRoom": {"ru" : "зал",          "de": "wohnzimmer",           "en": "living" },
    "bedroom":    {"ru" : "спальн",       "de": "schlafzimmer",         "en": "bedroom" },
    "bathroom":   {"ru" : "ванн",         "de": "bad",                  "en": "bath" },
    "office":     {"ru" : "кабинет",      "de": "arbeitszimmer/kabinet/büro","en": "working/office" },
    "nursery":    {"ru" : "детск",        "de": "kinder",               "en": "kids/child/nursery" },
    "wc":         {"ru" : "туалет",       "de": "wc",                   "en": "wc/closet" },
    "floor":      {"ru" : "прихож/вход/коридор",  "de": "diele/eingang/flur",   "en": "floor/enter" },
    "kitchen":    {"ru" : "кухня/кухне",  "de": "küche",                "en": "kitchen" },
    "everywhere": {"ru" : "везде",        "de": "alle/überall",         "en": "everywhere" },
    "terrace":    {"ru" : "балкон/терасс","de": "balkon/terrasse",      "en": "balcony/terrace/patio" },
    "dinningRoom":{"ru" : "столовая",     "de": "esszimmer",            "en": "dinning" },
    "garage":     {"ru" : "гараж",        "de": "garage",               "en": "garage" },
    "stairs":     {"ru" : "лестниц",      "de": "treppe",               "en": "stair" },
    "garden":     {"ru" : "сад",          "de": "garten",               "en": "garden" },
    "court":      {"ru" : "двор",         "de": "hof",                  "en": "court/yard" },
    "guestroom":  {"ru" : "гостей",       "de": "gästezimmer/gast",     "en": "guest room" },
    "attic":      {"ru" : "кладовк",      "de": "speicher",             "en": "attic" },
    "roof":       {"ru" : "крыше/крыша",  "de": "dachstuhl",            "en": "roof" },
    "terminal":   {"ru" : "сени/сенях",   "de": "anschlussraum",        "en": "terminal" },
    "washRoom":   {"ru" : "прачечн",      "de": "waschraum",            "en": "wash room" },
    "heatRoom":   {"ru" : "котельн",      "de": "heizungsraum",         "en": "heat room" },
    "hovel":      {"ru" : "сарай/сарае",  "de": "schuppen/scheune",     "en": "hovel" },
    "summerHouse":{"ru" : "теплиц",       "de": "gartenhaus",           "en": "summer" }
};
// In room
var roomsDative = {
    "livingRoom": {"ru" : "в зале",       "de": "im Wohnzimmer",        "en": "in the living room" },
    "bedroom":    {"ru" : "в спальне",    "de": "im Schlafzimmer",      "en": "in the bedroom" },
    "bathroom":   {"ru" : "в ванной",     "de": "im Bad",               "en": "in the bath" },
    "office":     {"ru" : "в кабинете",   "de": "im Arbeitszimmer",     "en": "in the office" },
    "nursery":    {"ru" : "в детской",    "de": "im Kinderzimmer",      "en": "in the kids room" },
    "wc":         {"ru" : "в туалете",    "de": "im WC",                "en": "in wc" },
    "floor":      {"ru" : "в прихожей",   "de": "im Flur",              "en": "in the floor" },
    "kitchen":    {"ru" : "на кухне",     "de": "in der Küche",         "en": "in the kitchen" },
    "everywhere": {"ru" : "во всём доме", "de": "überall",              "en": "everywhere" },
    "terrace":    {"ru" : "на балконе",   "de": "auf dem Balkon",       "en": "on the balcony" },
    "dinningRoom":{"ru" : "в столовой",   "de": "im Esszimmer",         "en": "in the dinning room" },
    "garage":     {"ru" : "в гараже",     "de": "in der Garage",        "en": "in the garage" },
    "stairs":     {"ru" : "на лестнице",  "de": "auf der Treppe",       "en": "on the stairs" },
    "garden":     {"ru" : "в саду",       "de": "im Garten",            "en": "in the garden" },
    "court":      {"ru" : "во дворе",     "de": "im Hof",               "en": "in the court" },
    "guestroom":  {"ru" : "в гостевой",   "de": "im Gästezimmer/gast",  "en": "in the guest room" },
    "attic":      {"ru" : "в кладовке",   "de": "im Speicher",          "en": "in the attic" },
    "roof":       {"ru" : "на крыше",     "de": "im Dachstuhl",         "en": "on the roof" },
    "terminal":   {"ru" : "в сенях",      "de": "im Anschlussraum",     "en": "in the terminal" },
    "washRoom":   {"ru" : "в прачечной",  "de": "im Waschraum",         "en": "in the wash room" },
    "heatRoom":   {"ru" : "в котельной",  "de": "im Heizungsraum",      "en": "in the heat room" },
    "hovel":      {"ru" : "в сарае",      "de": "in der Schuppen",      "en": "in the hovel" },
    "summerHouse":{"ru" : "в теплице",    "de": "im Gartenhaus",        "en": "in the summer house" }
};

// Translation of roles
var roles = {
    "backlight":  {"ru" : "подсветк/светильник","de": "beleuchtung/rücklicht", "en": "back light/back light/rear light" },
    "light":      {"ru" : "свет/лампу/лампа",   "de": "licht/lampe",    "en": "light/lamp" },
    "heating":    {"ru" : "отопление/батаре",   "de": "heizung",        "en": "heating" },
    "shutter":    {"ru" : "жалюзи/ставни",      "de": "rolllade",       "en": "shutter" },
    "music":      {"ru" : "музык",              "de": "musik",          "en": "music" },
    "all":        {"ru" : "всё/все",            "de": "alles",          "en": "all" }
};

// There is no this role
var rolesGenitive = {
    "light":      {"ru" : "ламп",               "de": "e Lampen",       "en": "light" },
    "backlight":  {"ru" : "подсветки",          "de": "e Beleuchtung",  "en": "back light" },
    "heating":    {"ru" : "отопленияе",         "de": "e Heizung",      "en": "heating" },
    "shutter":    {"ru" : "жалюзей",            "de": "e Rolllade",     "en": "shutter" },
    "music":      {"ru" : "музыки",             "de": "e Musik",        "en": "music" },
    "all":        {"ru" : "всего",              "de": " alles",         "en": "all" }
};
// Switch the role on/off
var rolesAccusative = {
    "light":      {"ru" : "свет",               "de": "das Licht",      "en": "light" },
    "backlight":  {"ru" : "подсветку",          "de": "die Beleuchtung","en": "back light" },
    "heating":    {"ru" : "отопление",          "de": "die Heizung",    "en": "heating" },
    "shutter":    {"ru" : "жалюзи",             "de": "die Rolllade",   "en": "shutter" },
    "music":      {"ru" : "музыку",             "de": "die Musik",      "en": "music" },
    "all":        {"ru" : "всё",                "de": "alles",          "en": "all" }
};

// TODO place IDontKnow and co here

if (module) {
	module.exports = {
        commands:        commands,
        rooms:           rooms,
        roles:           roles,
        rolesAccusative: rolesAccusative,
        rolesGenitive:   rolesGenitive,
        roomsDative:     roomsDative
    };
}
