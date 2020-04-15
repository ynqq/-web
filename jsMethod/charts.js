var charts = function () {

}

charts.prototype = {
    init: function () {
        this.initChart()
        this.initChart2()
        this.initYear()
        this.initMonth()
    },
    initChart: function () {
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        };
        ;

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    },
    initChart2: function () {
        var myChart = echarts.init(document.getElementById('main2'));

        // 指定图表的配置项和数据
        var option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        };
        ;

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    },
    initMonth: function(){
        var year = new Date().getMonth() + 1
        var list = [], list2 = []
        for (var i = 0; i < 12; i++) {
            list.push(i+1)
        }
        list = list.reverse().concat(list2)
        var yearHtml = '', yearHtml2 = ''
        list.forEach(function (v) {
            yearHtml += `<option value="${v}">${v}月</option>`
            yearHtml2 += `<option value="${v}">${v}月</option>`
        })
        $('[name="startMonth"]').html(yearHtml)
        $('[name="endMonth"]').html(yearHtml2)
        $('[name="startMonth"]').find('option').each(function () {
            if ($(this).val() == year - 1) {
                $(this).attr('selected', true)
            }
        })
        $('[name="endMonth"]').find('option').each(function () {
            if ($(this).val() == year) {
                $(this).attr('selected', true)
            }
        })
        $('[name="startMonth"]').trigger('changed.selected.amui');
        $('[name="endMonth"]').trigger('changed.selected.amui');
    },
    initYear: function () {
        var year = new Date().getFullYear()
        var list = [], list2 = []
        for (var i = 0; i < 10; i++) {
            list.push(year - i)
            list2.push(year + i)
        }
        list = list.reverse().concat(list2)
        var yearHtml = '', yearHtml2 = ''
        list.forEach(function (v) {
            yearHtml += `<option value="${v}">${v}年</option>`
            yearHtml2 += `<option value="${v}">${v}年</option>`
        })
        $('[name="startYear"]').html(yearHtml)
        $('[name="endYear"]').html(yearHtml2)
        $('[name="startYear"]').find('option').each(function () {
            if ($(this).val() == year - 1) {
                $(this).attr('selected', true)
            }
        })
        $('[name="endYear"]').find('option').each(function () {
            if ($(this).val() == year) {
                $(this).attr('selected', true)
            }
        })
        $('[name="startYear"]').trigger('changed.selected.amui');
        $('[name="endYear"]').trigger('changed.selected.amui');
    }

}

new charts().init()