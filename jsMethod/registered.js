var registered = function () {

}
registered.prototype = {
    init: function () {
        this.event()
    },
    event: function () {
        var _this = this
        $('.submit').click(function () {
            _this.submit()
        })
        $('.back').click(function () {
            window.history.back()
        })
        $('.deletePic').click(function () {
            $('.fileBox').removeClass('hide')
            $('.shouwPicBox').addClass('hide')
        })
        $('[name="file"]').change(function () {
            if ($(this).val() != '') {
                var file = $(this)[0].files[0]
                $(this).parents('.form-control').eq(0).addClass('hide')
                $('.shouwPicBox').removeClass('hide')
                readASBase(file, function (obj) {
                    $('.showPic').attr('src', obj.base64)
                })
            }
            $(this).val('')
        })
    },
    check: function () {
        if ($('[name="phone"]').val() == '' || !/^1[1-9][0-9]{9}$/.test($('[name="phone"]').val())) {
            x0p('请输入正确的手机号')
            return false
        }
        if ($('[name="password"]').val() == '') {
            x0p('请输入密码')
            return false
        }
        if ($('[name="password"]').val() !== $('[name="passwordAgain"]').val()) {
            x0p('两次密码不一致')
            return false
        }
        if ($('[name="name"]').val() == '') {
            x0p('请输入商户名')
            return false
        }
        if ($('[name="address"]').val() == '') {
            x0p('请输入地址')
            return false
        }
    },
    getData: function(){

    },
    submit: function () {
        if(this.check()){
            
        }
    }
}

new registered().init()