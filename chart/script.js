// line chart

const lineChart = document.querySelector('#lineChart');

const labels = [
    '22 Jul',
    '23 Jul',
    '24 Jul',
    '25 Jul',
    '26 Jul',
    '27 Jul',
    '28 Jul',
    '29 Jul',
    '30 Jul',
    '31 Jul',
    '01 Aug',
    '02 Aug',
    '03 Aug',
    '04 Aug',
    '05 Aug',
    '06 Aug',
    '07 Aug',
    '08 Aug',
    '09 Aug',

    ];

new Chart(lineChart, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Povratni pregledi',
                    data: [1844, 1554, 1273, 1284, 1126, 946 , 964 , 1793, 1432, 1130, 1074, 954, 856, 833, 1536, 1416, 1248, 1226],
                    borderColor: `rgba(66, 138, 245, 1)`,
                },
                {
                    label: 'Novi pregledi',
                    data: [1199, 1314, 1147, 1403, 1217, 1015, 1138, 1272, 957 , 862 , 716 , 712, 610, 585, 847 , 744 , 756 , 781],
                    borderColor: `rgba(235, 134, 52, 1)`,
                }
            ]
        }
});

// pie chart

const pieChart = document.querySelector('#pieChart');

new Chart(pieChart, {
    type: 'pie',
    data: {
        labels: ['Srbija', 'BiH', 'S. Makedonija', 'Crna Gora', 'Ostali'],
        datasets: [
            {
                label: 'Drzave',
                data: [49.6, 20.3, 9.5, 3.6, 2.6, 14.4],
                backgroundColor: [
                    'rgba(52, 235, 143, 1)',
                    'rgba(235, 201, 52, 1)',
                    'rgba(52, 153, 235, 1)',
                    'rgba(235, 52, 119, 1)',
                    'rgba(186, 52, 235, 1)',
                    'rgba(52, 153, 170, 1)',
                ]
            },
            {

            }
        ]
    }
});

// bar chart


const barChart = document.querySelector('#barChart');


new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ['13-17', '18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
        datasets: [
            {
                label: 'Publika po godinama',
                data: [1.7, 43.3, 34.4, 13.6, 5.6, 1.2, 0.3],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(155, 159, 64, 1)',
                ]
            }
        ]
    }
})







const bubbleChart = document.querySelector('#bubbleChart');




new Chart(bubbleChart, {
    type: 'bubble',
    data: {
        
        datasets: [
            {
            label: 'Publika',
            data: [
                {
                    x: 20,
                    y: 10,
                    r: 45,
                },{
                    x: 30,
                    y: 10,
                    r: 15,
                },
                {
                    x: 2,
                    y: 3,
                    r: 25,
                }
            ],




            borderColor: [
                'rgba(255, 99, 132, 1)',
                ],
            backgroundColor: `rgba(52, 235, 143, 1)`,
            },
            {
                label: 'Rasprodaja',
                data: [
                    {
                        x: 50,
                        y: 10,
                        r: 32,
                    },{
                    x: 20,
                    y: 29,
                    r: 12,
                    },{
                        x: 10,
                        y: 20,
                        r: 8,
                    },{
                        x: 40,
                        y: 27,
                        r: 25,
                    }
                ],
                        borderColor: [
                                    'rgba(152, 153, 170, 1)',
                        ],
                        backgroundColor: `rgba(255, 99, 132, 1)`,
            }
        ]
    }
});










