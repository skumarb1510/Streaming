var pieChart ={};

pieChart.randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
};

pieChart.config = {
        type: 'doughnut',
        centerText:'All',
        chartObjName:'myDoughnut',
        events:{mousemove:function(x,y,config){
            var linkX = config.linkX,linkY = config.linkY,linkWd = config.linkWd,linkHt = 24;
            if(x>=linkX && x <= (linkX + linkWd) && y<=linkY && y>= (linkY-linkHt)){
                document.body.style.cursor = "pointer";
                config.inLink=true;
            }
            else{
                document.body.style.cursor = "";
                config.inLink=false;
            }
        },click:function(c,d,i,conf){if(conf.inLink){console.log('s')}else{console.log('n')}}},
        data: {
            datasets: [{
                data: [
                    pieChart.randomScalingFactor(),
                    pieChart.randomScalingFactor(),
                    pieChart.randomScalingFactor(),
                    pieChart.randomScalingFactor(),
                    pieChart.randomScalingFactor(),
                ],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.yellow,
                    window.chartColors.green,
                    window.chartColors.blue,
                ],
                label: 'Dataset 1'
            }],
            labels: [
                "Health Care",
                "Automotive",
                "Finance/Insurance",
                "Entertainment",
                "Blue"
            ]
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };

pieChart.update = function(){
    pieChart.config.data.datasets.forEach(function(dataset) {
            dataset.data = dataset.data.map(function() {
                return pieChart.randomScalingFactor();
            });
        });
    window.myDoughnut.update();
}

pieChart.draw=function(id){
    var ctx = document.getElementById(id).getContext("2d");
    window.myDoughnut = new Chart(ctx, pieChart.config);
    window.setInterval(pieChart.update,3000);
}

Chart.pluginService.register({
        beforeDraw: function(chart) {
            if(!chart.chart.config.centerText){return null;}
            var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;

            ctx.restore();
            var fontSize = (height / 114).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";

            var text = chart.chart.config.centerText,
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = (height / 2)+30;
                chart.chart.config.linkText = text;
                chart.chart.config.linkX=textX;
                chart.chart.config.linkY=textY;
                chart.chart.config.linkWd=ctx.measureText(text).width;

            ctx.fillText(text, textX, textY);
            ctx.save();
        },
        afterDatasetDraw:function(chart){
            if(chart.chart.config.events){
                // if(chart.chart.config.events.hover){                    
                //     $(chart.canvas).hover(function(evt){
                //         alert(evt.layerX)
                //         if (evt.layerX || evt.layerX == 0) {
                //             x = evt.layerX;
                //             y = evt.layerY;
                //         }
                //         x-=chart.canvas.offsetLeft;
                //         y-=chart.canvas.offsetTop;
                        
                //         chart.chart.config.activePts = window[chart.chart.config.chartObjName].getElementsAtEvent(evt);
                //         if(chart.chart.config.activePts.length>0){
                //             chart.chart.config.events.hover[0](chart.chart.config.activePts[0]["_chart"],
                //                 chart.chart.config.activePts[0]["_datasetIndex"],
                //                 chart.chart.config.activePts[0]["_index"],x,y
                //             )
                //         }
                //     },function(evt){
                //         if(chart.chart.config.activePts.length>0){
                //             chart.chart.config.events.hover[1](chart.chart.config.activePts[0]["_chart"],
                //                 chart.chart.config.activePts[0]["_datasetIndex"],
                //                 chart.chart.config.activePts[0]["_index"]
                //             )
                //         }
                //     })
                // }
                if(chart.chart.config.events.click){
                    $(chart.canvas).unbind();
                    $(chart.canvas).click(function(evt){                        
                        chart.chart.config.activePts = window[chart.chart.config.chartObjName].getElementsAtEvent(evt);                                             
                        if(chart.chart.config.activePts.length>0){
                            chart.chart.config.events.click(chart.chart.config.activePts[0]["_chart"],
                                chart.chart.config.activePts[0]["_datasetIndex"],
                                chart.chart.config.activePts[0]["_index"],
                                chart.chart.config
                            )
                        }
                        else if(chart.chart.config.inLink)
                        chart.chart.config.events.click(null,null,null,chart.chart.config);
                    });
                }
                if(chart.chart.config.events.mousemove){                    
                     $(chart.canvas).unbind("mousemove");
                    $(chart.canvas).get(0).addEventListener("mousemove", function(evt){
                        if (evt.layerX || evt.layerX == 0) {
                            x = evt.layerX;
                            y = evt.layerY;
                        }
                        x-=chart.canvas.offsetLeft;
                        y-=chart.canvas.offsetTop;
                        chart.chart.config.events.mousemove(x,y,chart.chart.config)
                    }, false);
                    
                }
            }
            
        }
});
