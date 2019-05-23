
/* ARCH MAP */

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

/* CHORD DIAGRAM */

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

/* BULLETS PIE CHART */

export const bulletsPieChartData = {
    data: [{
        "fromRegionName": "Lithuania",
        "units": 500,
        "columnColor": "#FFFF00",
        "pie": [{
          "value": 250,
          "title": "Cat #1",
          "pieColor": "#845EC2"
        }, {
          "value": 150,
          "title": "Cat #2",
          "pieColor": "#D65DB1"
        }, {
          "value": 100,
          "title": "Cat #3",
          "pieColor": "#FF6F91"
        }]
      }, {
        "fromRegionName": "Czech Republic",
        "units": 300,
        "columnColor": "#008000",
        "pie": [{
          "value": 80,
          "title": "Cat #1",
          "pieColor": "#FF9671"
        }, {
          "value": 130,
          "title": "Cat #2",
          "pieColor": "#FFC75F"
        }, {
          "value": 90,
          "title": "Cat #3",
          "pieColor": "#F9F871"
        }]
      }, {
        "fromRegionName": "Ireland",
        "units": 200,
        "columnColor": "#DD3914",
        "pie": [{
          "value": 75,
          "title": "Cat #1",
          "pieColor": "#F9F871"
        }, {
          "value": 55,
          "title": "Cat #2",
          "pieColor": "#F9F871"
        }, {
          "value": 70,
          "title": "Cat #3",
          "pieColor": "#F9F871"
        }]
    },
    {
        "fromRegionName": "Another",
        "units": 200,
        "columnColor": "#DD3914",
        "pie": [{
          "value": 75,
          "title": "Cat #1",
          "pieColor": "#F9F871"
        }, {
          "value": 55,
          "title": "Cat #2",
          "pieColor": "#F9F871"
        }, {
          "value": 70,
          "title": "Cat #3",
          "pieColor": "#F9F871"
        }]
    },
    {
        "fromRegionName": "Another2",
        "units": 200,
        "columnColor": "#DD3914",
        "pie": [{
          "value": 75,
          "title": "Cat #1",
          "pieColor": "#F9F871"
        }, {
          "value": 55,
          "title": "Cat #2",
          "pieColor": "#F9F871"
        }, {
          "value": 70,
          "title": "Cat #3",
          "pieColor": "#F9F871"
        }]
    },
    {
        "fromRegionName": "Another3",
        "units": 200,
        "columnColor": "#DD3914",
        "pie": [{
          "value": 75,
          "title": "Cat #1",
          "pieColor": "#F9F871"
        }, {
          "value": 55,
          "title": "Cat #2",
          "pieColor": "#F9F871"
        }, {
          "value": 70,
          "title": "Cat #3",
          "pieColor": "#F9F871"
        }]
    },
    {
        "fromRegionName": "Another4",
        "units": 200,
        "columnColor": "#DD3914",
        "pie": [{
          "value": 75,
          "title": "Cat #1",
          "pieColor": "#F9F871"
        }, {
          "value": 55,
          "title": "Cat #2",
          "pieColor": "#F9F871"
        }, {
          "value": 70,
          "title": "Cat #3",
          "pieColor": "#F9F871"
        }]
    },
    {
        "fromRegionName": "Another5",
        "units": 200,
        "columnColor": "#DD3914",
        "pie": [{
          "value": 75,
          "title": "Cat #1",
          "pieColor": "#F9F871"
        }, {
          "value": 55,
          "title": "Cat #2",
          "pieColor": "#F9F871"
        }, {
          "value": 70,
          "title": "Cat #3",
          "pieColor": "#F9F871"
        }]
    }],
    conf: {
        COLUMN_COLOR: "columnColor",
        PIE_COLOR: "pieColor",
        COLUMN_REGION_NAME: "fromRegionName",
        PIE_VALUE: "value",
        PIE_TITLE: "title",
        PIE_FIELD_NAME: "pie"
    }
};
