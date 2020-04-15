var headerSide = function (src, index1, index2) {
    //图标和标题

    $('head').children('title').html('')
    $('[rel="icon"]').attr('href', src + '')

    //头部内容
    var headerHtml = '<div class="am-fl tpl-header-logo">'
        + 'xx系统'
        + '</div>'
        + '<div class="tpl-header-fluid">'
        + '<div class="am-fl tpl-header-switch-button am-icon-list">'
        + '<span>'
        + '</span>'
        + '</div>'
        + '<div class="am-fr tpl-header-navbar">'
        + '<ul>'
        + '<li class="am-text-sm tpl-header-navbar-welcome">'
        + '<a href="javascript:;">欢迎你, <span>' + sessionStorage.getItem('teacherName') + '</span> </a>'
        + '</li>'
        + '<li class="am-text-sm">'
        + '<a href="'+src+'/login.html">'
        + '<span class="am-icon-sign-out"></span> 退出'
        + '</a>'
        + '</li>'
        + '</ul>'
        + '</div>'
        + '</div>'
    $('header').html(headerHtml)

    var sideHtml='';
    var power=sessionStorage.getItem('power');
    if(power==1){
        var sideHtml = '</div>'
        + '<ul class="sidebar-nav">'
        + '</li>'


        + '<li class="sidebar-nav-link">'
        + '<a href="' + src + 'html/charts.html">'
        + '<i class="am-icon-tv sidebar-nav-link-logo"></i> 销售统计'
        + '</a>'
        + '</li>'


        + '<li class="sidebar-nav-link">'
        + '<a href="' + src + 'html/classList.html">'
        + '<i class="am-icon-tv sidebar-nav-link-logo"></i> 分类管理'
        + '</a>'
        + '</li>'


        + '<li class="sidebar-nav-link">'
        + '<a href="' + src + 'html/productList.html">'
        + '<i class="am-icon-tv sidebar-nav-link-logo"></i> 菜品管理'
        + '</a>'
        + '</li>'

        + '<li class="sidebar-nav-link">'
        + '<a href="' + src + 'html/orderList.html">'
        + '<i class="am-icon-tv sidebar-nav-link-logo"></i> 订单管理'
        + '</a>'
        + '</li>'

        + '<li class="sidebar-nav-link">'
        + '<a href="javascript:;" class="sidebar-nav-sub-title">'
        + '<i class="am-icon-table sidebar-nav-link-logo"></i> 个人信息管理'
        + '<span class="am-icon-chevron-down am-fr am-margin-right-sm sidebar-nav-sub-ico"></span>'
        + '</a>'
        + '<ul class="sidebar-nav sidebar-nav-sub" style="height: 933px; display: none;">'

        + '<li class="sidebar-nav-link">'
        + '<a href="' + src + 'html/userInfo.html">'
        + '<span class="am-icon-angle-right sidebar-nav-link-logo"></span> 基础信息管理'
        + '</a>'
        + '</li>'
        
        + '<li class="sidebar-nav-link">'
        + '<a href="' + src + 'html/time.html">'
        + '<span class="am-icon-angle-right sidebar-nav-link-logo"></span> 营业时间管理'
        + '</a>'
        + '</li>'

        + '</ul>'
        + '</li>'


        + '</ul>'
    }else if(power==0){
        sideHtml = '</div>'
        + '<ul class="sidebar-nav">'
        + '</li>'


        + '<li class="sidebar-nav-link">'
        + '<a href="' + src + 'html/bannerManager.html">'
        + '<i class="am-icon-tv sidebar-nav-link-logo"></i> Banner管理'
        + '</a>'
        + '</li>'

        + '<li class="sidebar-nav-link">'
        + '<a href="' + src + 'html/userManager.html">'
        + '<i class="am-icon-tv sidebar-nav-link-logo"></i> 用户管理'
        + '</a>'
        + '</li>'


        + '</ul>'
    }

    
    $('.left-sidebar').html(sideHtml)
    $('.left-sidebar').children('.sidebar-nav').children('.sidebar-nav-link').eq(index1).children('a').eq(0).addClass('active').siblings('ul').css('display', 'block').children('li').eq(index2).children('a').addClass('sub-active')
    $('.sidebar-nav').children('li').click(function () {
        sessionStorage.back = 0
    })
}