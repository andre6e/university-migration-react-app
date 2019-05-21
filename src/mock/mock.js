// REGIONS LIST

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

/* ARCH MAP */

export const emptyArchLayersData = {
    data: [],
    conf: {}
}

export const archLayersData = {
    data: [
        {
            id: 'Source name 1 - Target name 1',
            data: [
                {
                    props: {
                        numberOfEle: 1500,
                        sourceName: "Source name 1",
                        targetName: "Target name 1",
                    },
                    source: [15.809171, 40.637701],
                    target: [7.6824892, 45.0677551]
                }
            ],
            // opacity: 0.3, 
            getSourceColor: [81, 110, 112],
            getTargetColor: [81, 110, 112],
            getWidth: 7, 
            highlightColor: [255, 0, 0]
        },
        {
            id: 'Source name 2 - Target name 2',
            data: [
                {
                    props: {
                        numberOfEle: 1500,
                        sourceName: "Source name 2",
                        targetName: "Target name 2",
                    },
                    source: [16.884139, 41.110040],
                    target: [9.1904984, 45.4667971]
                }
            ],
            // opacity: 0.3,
            getSourceColor: [51, 178, 223],
            getTargetColor: [51, 178, 223],
            getWidth: 7,
            highlightColor: [255, 0, 0]
        }
    ],
    conf: {
        visibleRegions: [
            {
                name: 'Source name 1',
                color: [81, 110, 112]
            },
            {
                name: 'Source name 2',
                color: [51, 178, 223]
            },
            {
                name: 'Source name 3',
                color: [51, 178, 223]
            },
            {
                name: 'Source name 4',
                color: [51, 178, 223]
            },
            {
                name: 'Source name 5',
                color: [51, 178, 223]
            },
            {
                name: 'Source name 6',
                color: [51, 178, 223]
            },
            {
                name: 'Source name 7',
                color: [51, 178, 223]
            },
            {
                name: 'Source name 8',
                color: [51, 178, 223]
            },
            {
                name: 'Source name 9',
                color: [51, 178, 223]
            },
            {
                name: 'Source name 10',
                color: [51, 178, 223]
            },
            {
                name: 'Source name 11',
                color: [51, 178, 223]
            },
            {
                name: 'Source name 12',
                color: [51, 178, 223]
            },
            {
                name: 'Friuli-Venezia Giulia',
                color: [51, 178, 223]
            },
            {
                name: 'Source name 14',
                color: [51, 178, 223]
            },
            {
                name: 'Source name 15',
                color: [51, 178, 223]
            },
            {
                name: 'Trentino-Alto Adige',
                color: [51, 178, 223]
            },
            {
                name: 'Source name 17',
                color: [51, 178, 223]
            },
            {
                name: 'Source name 18',
                color: [51, 178, 223]
            },
            {
                name: 'Source name 19',
                color: [51, 178, 223]
            },
            {
                name: 'Source name 20',
                color: [51, 178, 223]
            },
        ]
    }
};

export const archLayersData2 = {
    data: [
        {
            id: 'Source name 1 - Target name 1',
            data: [
                {
                    props: {
                        numberOfEle: 1500,
                        sourceName: "Source name 1",
                        targetName: "Target name 1",
                    },
                    source: [15.809171, 40.637701],
                    target: [7.6824892, 45.0677551]
                }
            ],
            // opacity: 0.3, 
            getSourceColor: [81, 110, 112],
            getTargetColor: [81, 110, 112],
            getWidth: 7, 
            highlightColor: [255, 0, 0]
        },
        {
            id: 'Source name 2 - Target name 2',
            data: [
                {
                    props: {
                        numberOfEle: 1500,
                        sourceName: "Source name 2",
                        targetName: "Target name 2",
                    },
                    source: [16.884139, 41.110040],
                    target: [9.1904984, 45.4667971]
                }
            ],
            // opacity: 0.3,
            getSourceColor: [51, 178, 223],
            getTargetColor: [51, 178, 223],
            getWidth: 7,
            highlightColor: [255, 0, 0]
        },
        {
            id: 'Source name 3 - Target name 1',
            data: [
                {
                    props: {
                        numberOfEle: 500,
                        sourceName: "Source name 3",
                        targetName: "Target name 1",
                    },
                    source: [16.884139, 41.110040],
                    target: [7.6824892, 45.0677551]
                }
            ],
            // opacity: 0.5,
            getSourceColor: [81, 110, 112],
            getTargetColor: [81, 110, 112],
            getWidth: 3,
            highlightColor: [255, 0, 0]
        },
        {
            id: 'Source name 4 - Target name 2',
            data: [
                {
                    props: {
                        numberOfEle: 500,
                        sourceName: "Source name 4",
                        targetName: "Target name 2",
                    },
                    source: [15.809171, 40.637701],
                    target: [9.1904984, 45.4667971]
                }
            ],
            // opacity: 1,
            getSourceColor: [51, 178, 223],
            getTargetColor: [51, 178, 223],
            getWidth: 3,
            highlightColor: [255, 0, 0],
        }
    ],
    conf: {
        visibleRegions: [
            {
                name: 'Source name 1',
                color: [81, 110, 112]
            },
            {
                name: 'Source name 2',
                color: [51, 178, 223]
            },
            {
                name: 'Source name 3',
                color: [51, 178, 223]
            },
            {
                name: 'Source name 4',
                color: [51, 178, 223]
            }
        ]
    }
};

/* STACKED COLUMN CHART */

export const stackedColumnData = {
    data: [
        { "regionFromCategory": "Basilicata", "europe": 2.5, "namerica": 2.5, "asia": 2.1, "lamerica": 0.3, "meast": 0.2,  "africa": 0.1 }, 
        { "regionFromCategory": "Puglia", "europe": 2.6, "namerica": 2.7, "asia": 2.2, "lamerica": 0.3, "meast": 0.3, "africa": 0.1 },
        { "regionFromCategory": "asdd", "europe": 2.6, "namerica": 2.7, "asia": 2.2, "lamerica": 0.3, "meast": 0.3, "africa": 0.1 },
        { "regionFromCategory": "bbb", "europe": 2.6, "namerica": 2.7, "asia": 2.2, "lamerica": 0.3, "meast": 0.3, "africa": 0.1 },
        { "regionFromCategory": "aa", "europe": 2.6, "namerica": 2.7, "asia": 2.2, "lamerica": 0.3, "meast": 0.3, "africa": 0.1 },
        { "regionFromCategory": "qq", "europe": 2.6, "namerica": 2.7, "asia": 2.2, "lamerica": 0.3, "meast": 0.3, "africa": 0.1 },
        { "regionFromCategory": "bbscw", "europe": 2.6, "namerica": 2.7, "asia": 2.2, "lamerica": 0.3, "meast": 0.3, "africa": 0.1 }
    ],
    conf: {
        series: {
            "europe": "Europe",
            "namerica": "North America",
            "asia": "Asia-Pacific",
            "lamerica": "Latin America",
            "meast": "Middle-East",
            "africa": "Africa"
        },
        seriesColours: {
            "europe": "#93B5C6",
            "namerica": "#DDEDAA",
            "asia": "#F0CF65",
            "lamerica": "#D7816A",
            "meast": "#BEC5AD",
            "africa": "#BD4F6C"
        },
        REGION_FROM_CATEGORY_KEY: "regionFromCategory"
    }
};

export const stackedColumnEmptyData = {
    data: [],
    conf: {
        series: {
            "nores": "Nessun risultato"
        },
        seriesColours: {
            "nores": "#858787"
        },
        REGION_FROM_CATEGORY_KEY: "regionFromCategory"
    }
};

export const stackedColumnData2 = {
    data: [
        { "regionFromCategory": "Basilicata", "europe": 2.5, /*"namerica": 2.5,  "asia": 2.1, */ "lamerica": 0.3, "meast": 0.2,  "africa": 0.1 }, 
    ],
    conf: {
        series: {
            "europe": "Europe",
            // "namerica": "North America",
            // "asia": "Asia-Pacific",
            "lamerica": "Latin America",
            "meast": "Middle-East",
            "africa": "Africa"
        },
        seriesColours: {
            "europe": "#93B5C6",
            // "namerica": "#DDEDAA",
            // "asia": "#F0CF65",
            "lamerica": "#D7816A",
            "meast": "#BEC5AD",
            "africa": "#BD4F6C"
        },
        REGION_FROM_CATEGORY_KEY: "regionFromCategory"
    }
};

/* CHORD DIAGRAM */

export const chordEmptyData = {
    data: [],
    conf: {
        fromName : "from",
        toName : "to",
        value : "value",
        color: "nodeColor"
    }
};

export const chordMockData = {
    data: [
        { "from": "A", "to": "D", "value": 10, "nodeColor": "#93B5C6" },
        { "from": "B", "to": "D", "value": 8, "nodeColor": "#DDEDAA" },
        { "from": "B", "to": "E", "value": 4, "nodeColor": "#DDEDAA" },
        { "from": "B", "to": "C", "value": 2, "nodeColor": "#DDEDAA" },
        { "from": "C", "to": "E", "value": 14, "nodeColor": "#F0CF65" },
        { "from": "E", "to": "D", "value": 8, "nodeColor": "#D7816A" },
        { "from": "C", "to": "A", "value": 4, "nodeColor": "#F0CF65" },
        { "from": "G", "to": "A", "value": 7, "nodeColor": "#BEC5AD" },
        { "from": "D", "to": "B", "value": 1, "nodeColor": "#BD4F6C" }, // il nodeColor verrà attribuito al nodo from
        { "from": "J", "nodeColor": "#06D6A0" } // elemento con nessun valore
    ],
    conf: {
        fromName : "from",
        toName : "to",
        value : "value",
        color: "nodeColor"
    }
};
