var barChart = {}
var color = Chart.helpers.color;
barChart.config = {
                type: 'bar',
                data: {
                        labels: ["January", "February", "March","April"],
                        datasets: [{
                            label: "Blue",
                            backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
                            borderColor: window.chartColors.red,
                            borderWidth: 1,
                            data: [3, 0, 0,0]
                        }, {
                            label: "Red",
                            backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
                            borderColor: window.chartColors.red,
                            borderWidth: 1,
                            data: [4, 0, 0,0]
                        }, {
                            label: "Green",
                            backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
                            borderColor: window.chartColors.red,
                            borderWidth: 1,
                            data: [7, 0, 0,0]
                        },{
                            label: "Tan",
                            backgroundColor: color(window.chartColors.orange).alpha(0.5).rgbString(),
                            borderColor: window.chartColors.orange,
                            borderWidth: 1,
                            data: [0, 6, 0,0]
                        }, {
                            label: "Orange",
                            backgroundColor: color(window.chartColors.orange).alpha(0.5).rgbString(),
                            borderColor: window.chartColors.orange,
                            borderWidth: 1,
                            data: [0, 2, 0,0]
                        }, {
                            label: "Voilet",
                            backgroundColor: color(window.chartColors.orange).alpha(0.5).rgbString(),
                            borderColor: window.chartColors.orange,
                            borderWidth: 1,
                            data: [0, 9, 0,0]
                        },{
                            label: "Sean",
                            backgroundColor: color(window.chartColors.yellow).alpha(0.5).rgbString(),
                            borderColor: window.chartColors.yellow,
                            borderWidth: 1,
                            data: [0, 0, 12,0]
                        }, {
                            label: "Grey",
                            backgroundColor: color(window.chartColors.yellow).alpha(0.5).rgbString(),
                            borderColor: window.chartColors.yellow,
                            borderWidth: 1,
                            data: [0, 0, 10,0]
                        }, {
                            label: "Yellow",
                            backgroundColor: color(window.chartColors.yellow).alpha(0.5).rgbString(),
                            borderColor: window.chartColors.yellow,
                            borderWidth: 1,
                            data: [0, 0, 7,0]
                        },{
                            label: "ocean",
                            backgroundColor: color(window.chartColors.purple).alpha(0.5).rgbString(),
                            borderColor: window.chartColors.purple,
                            borderWidth: 1,
                            data: [0, 0, 0,5]
                        }, {
                            label: "river",
                            backgroundColor: color(window.chartColors.purple).alpha(0.5).rgbString(),
                            borderColor: window.chartColors.purple,
                            borderWidth: 1,
                            data: [0, 0, 0,10]
                        }, {
                            label: "lake",
                            backgroundColor: color(window.chartColors.purple).alpha(0.5).rgbString(),
                            borderColor: window.chartColors.purple,
                            borderWidth: 1,
                            data: [0, 0, 0,7]
                        }]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'right',
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Bar Chart'
                    }
                }
            };
barChart.draw = function(id){
    var ctx = document.getElementById(id).getContext("2d");
    window.myBar = new Chart(ctx,barChart.config);
}            