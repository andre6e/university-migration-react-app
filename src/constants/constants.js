export const SELECT_NAMES = {
    FROM: 'FROM_SELECT',
    TO: 'TO_SELECT'
};

// GRID LAYOURS
const LAYOUTS = {
    LG: [
        {i: '1', x: 0, y: 0, w: 12, h: 3, static: true},
        {i: '2', x: 0, y: 3, w: 12, h: 3},
        {i: '3', x: 0, y: 6, w: 12, h: 3}
    ],
    MD: [
        {i: '1', x: 0, y: 0, w: 10, h: 3, static: true},
        {i: '2', x: 0, y: 3, w: 10, h: 3, static: true},
        {i: '3', x: 0, y: 6, w: 10, h: 3, static: true}
    ],
    SM: [
        {i: '1', x: 0, y: 0, w: 6, h: 3, static: true},
        {i: '2', x: 0, y: 3, w: 6, h: 3, static: true},
        {i: '3', x: 0, y: 6, w: 6, h: 3, static: true}
    ]
};

// Grid layout margin
const MARGIN = [20, 20];

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

// API
export const API_URL = 'http://localhost:3001';
export const REQUEST_ENDPOINT = '/getData';

// Chord diagram
export const CHORD_DEFAULT_EMPTY_CHART_DATA = [
    { "from": "Nessun risultato", "to": "Nessun risultato", "value": 1, "nodeColor": "#858787" }, // il nodeColor verrà attribuito al nodo from
];

// Stacked column
export const STACKED_DEFAULT_EMPTY_CHART_DATA = [
    { "regionFromCategory": "", "nores": 1}
]; 

export const BULLETS_PIE_EMPTY_CHART_DATA = [
    {
        "fromRegionName": "Nessun risultato",
        "units": 1,
        "columnColor": "#858787",
        "pie": []
      }
]