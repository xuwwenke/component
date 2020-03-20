$(function(){
    var e=$(".main");
    return new Handsontable(e.get(0),{
        data:[
            ["Java","1","降","-0.01%"],
            ["C","2","升","+2.44%"],
            ["Python","3","升","+1.41%"],
            ["C++","4","降","-2.58%"],
            ["C#","5","升","+2.07%"],
            ["Visual Basic .NET","6","降","-1.17%"],
            ["JavaScript","7","降","-0.85%"],
        ],
        contextMenu:!0,
        manualRowResize:true,
        manualColumnResize:true,
        colWidths:150,
        rowHeights:40,
        className:"htMiddle",
        // rowHeaders:!0,
        colHeaders:["语言名称","排名","升或降","变化幅度"]
    })
});
$(function(){
    var myChart = echarts.init(document.getElementById('main'));
    var xData=[2000,2005,2010,2015,2020],
        yData=[6,9,8,8,7];
    var option = {
        title: {
            text: 'JavaScript语言排名变化'
        },
        tooltip: {
            trigger: "axis",
            textStyle: {
              color: "#fff"
            },
            formatter: function(params) {
            　　var result = ''
            　　params.forEach(function(item){
                    // console.log(item)
                　　result += '<span style="color: #fff; margin-left: 9px;">排名</span>'+ "</br>" +item.axisValue + ":"+ item.data
                })
            　　return result
            }
        },
        xAxis: {
            data: xData,
        },
        yAxis: {},
        series: [{
            name: '排名',
            type: 'line',
            smooth:false,
            data: yData,
        }],
    };
    myChart.setOption(option);
})
