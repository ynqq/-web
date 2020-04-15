function pageing(callback){
    /***
     *  分页
     * ***/
    $('.goSubmit').on('click',function(){ // 跳转
        var page = parseInt($('.targetNum').children('input').val())
        var allPageNum = parseInt($('.allPageNum').text())
        if(page == '' || page == 0  || isNaN(page) || page > allPageNum){
            x0p('请输入正确的数字！')
            return;
        }
        callback(page)
    })

    $('.pagepre').parent().on('click',function(){ // 上一页
        var page = $('.nowpage').text()
        page --
        if(page <= 1){
            page = 1;
        }
        callback(page)
    })
    $('.pagenext').parent().on('click',function(){ // 下一页
        var page = $('.nowpage').text()
        var allPageNum = $('.allPageNum').text()
        page ++
        if(page >= allPageNum){
            page = allPageNum;
        }
        callback(page)
    })
}