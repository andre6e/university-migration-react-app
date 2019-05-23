/* SELECTS REGIONS */

export const SELECT_NAMES = {
    FROM: 'FROM_SELECT',
    TO: 'TO_SELECT'
};

/* RESPONSIVE GRIDs CONF */
const _WIDGET_KEYS = {
  ARCHMAP: "ARCHMAP",
  BULLETSPIE: "BULLETSPIE",
  CHORDDIAGRAM: "CHORDDIAGRAM"
};

export const WIDGET_KEYS = _WIDGET_KEYS;

const LAYOUTS = {
    LG: [
        {i: _WIDGET_KEYS.ARCHMAP, x: 0, y: 0, w: 12, h: 3, static: true},
        {i: _WIDGET_KEYS.BULLETSPIE, x: 0, y: 3, w: 12, h: 3, minH: 2, minW: 3},
        {i: _WIDGET_KEYS.CHORDDIAGRAM, x: 0, y: 6, w: 12, h: 3, minH: 2, minW: 3}
    ],
    MD: [
        {i: _WIDGET_KEYS.ARCHMAP, x: 0, y: 0, w: 10, h: 3, static: true},
        {i: _WIDGET_KEYS.BULLETSPIE, x: 0, y: 3, w: 10, h: 3, static: true},
        {i: _WIDGET_KEYS.CHORDDIAGRAM, x: 0, y: 6, w: 10, h: 3, static: true}
    ],
    SM: [
        {i: _WIDGET_KEYS.ARCHMAP, x: 0, y: 0, w: 6, h: 3, static: true},
        {i: _WIDGET_KEYS.BULLETSPIE, x: 0, y: 3, w: 6, h: 3, static: true},
        {i: _WIDGET_KEYS.CHORDDIAGRAM, x: 0, y: 6, w: 6, h: 3, static: true}
    ]
};

// Grid layout margin
const MARGIN = [10, 10];

export const LAYOUT_BREAKPOINTS_KEYS = {
  lg:  "lg",
  md:  "md",
  sm:  "sm",
  xs:  "xs",
  xxs: "xxs"
};

export const GRID_LAYOUT_CONFIG = {
    COLS: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
    BREAKPOINTS: {lg: 1024, md: 768, sm: 425, xs: 375, xxs: 320},
    LAYOUTS: {
        lg:  LAYOUTS.LG,
        md:  LAYOUTS.MD,
        sm:  LAYOUTS.SM,
        xs:  LAYOUTS.SM,
        xxs: LAYOUTS.SM
    },
    MARGIN: MARGIN
};

/* API CONF */

export const API_URL = 'http://localhost:3001';
export const REQUEST_ENDPOINT = '/getData';

/* CHORD DIAGRAM */

export const CHORD_DEFAULT_EMPTY_CHART_DATA = [
    { "from": "Nessun risultato", "to": "Nessun risultato", "value": 1, "nodeColor": "#858787" }, // il nodeColor verrà attribuito al nodo from
];

export const chordEmptyData = {
    data: [],
    conf: {
        fromName : "from",
        toName : "to",
        value : "value",
        color: "nodeColor"
    }
};

/* BULLETS PIES CHART */

export const BULLETS_PIE_EMPTY_CHART_DATA = [
    {
        "fromRegionName": "Nessun risultato",
        "units": 1,
        "columnColor": "#858787",
        "pie": []
      }
];

export const bulletsPieChartEmptyData = {
    data: [],
    conf: {
        COLUMN_COLOR: "columnColor",
        PIE_COLOR: "pieColor",
        COLUMN_REGION_NAME: "fromRegionName",
        PIE_VALUE: "value",
        PIE_TITLE: "title",
        PIE_FIELD_NAME: "pie"
    }
};

/* ARCH MAP */

export const emptyArchLayersData = {
    data: [],
    conf: {}
}


/* REGIONS LIST */

export const regionsListMock = [
    {
      "value": 0,
      "label": "Abruzzo"
    },
    {
      "value": 1,
      "label": "Basilicata"
    },
    {
      "value": 2,
      "label": "Calabria"
    },
    {
      "value": 3,
      "label": "Campania"
    },
    {
      "value": 4,
      "label": "Emilia-Romagna"
    },
    {
      "value": 5,
      "label": "Friuli-Venezia Giulia"
    },
    {
      "value": 6,
      "label": "Lazio"
    },
    {
      "value": 7,
      "label": "Liguria"
    },
    {
      "value": 8,
      "label": "Lombardia"
    },
    {
      "value": 9,
      "label": "Marche"
    },
    {
      "value": 10,
      "label": "Molise"
    },
    {
      "value": 11,
      "label": "Piemonte"
    },
    {
      "value": 12,
      "label": "Puglia"
    },
    {
      "value": 13,
      "label": "Sardegna"
    },
    {
      "value": 14,
      "label": "Sicilia"
    },
    {
      "value": 15,
      "label": "Toscana"
    },
    {
      "value": 16,
      "label": "Trentino-Alto Adige"
    },
    {
      "value": 17,
      "label": "Umbria"
    },
    {
      "value": 18,
      "label": "Valle d'Aosta"
    },
    {
      "value": 19,
      "label": "Veneto"
    }
];
