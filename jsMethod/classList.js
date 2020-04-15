var classList = function () {

}
classList.prototype = {
    init: function () {
        this.dragEvent()
        this.event()
    },

    event: function () {
        $('.add').click(function(){
            $('#modalBox').removeClass('hide')
        })
        $('.changeState').click(function(){
            $('.dragList').find('.deleteItem, .updateItem').addClass('hide')
            $('.dragList').find('.dragItem').attr('draggable', true)
            $('.add').addClass('hide')
            $('.submitUpdate').removeClass('hide')
        })
        $('.submitUpdate').click(function(){
            $('.dragList').find('.deleteItem, .updateItem').removeClass('hide')
            $('.add').removeClass('hide')
            $('.submitUpdate').addClass('hide')
            $('.dragList').find('.dragItem').removeAttr('draggable', true)
        })
    },

    dragEvent: function () {
        var target, startIndex = -1
        $('.dragList').on('dragenter', function (e) {
            e.preventDefault()
        })
        $('.dragList').on('dragover', function (e) {
            var el
            if ($(e.target).is('.dragItem')) {
                el = $(e.target)
            } else {
                el = $(e.target).parents('.dragItem').eq(0)
            }
            if (el == target) {
                return
            }
            $(el).addClass('active').siblings('.dragItem').removeClass('active')
            if (startIndex < $(el).index()) {
                $(el).after($(target))
            } else if (startIndex > $(el).index()) {
                $(el).before($(target))
            }
            startIndex = $(target).index()
            e.preventDefault()
        })
        $('.dragList').on('drag', '.dragItem', function (e) {
            $('.dragItem').removeClass('active')
            e.preventDefault()
        })
        $('.dragList').on('drop', function (e) {
            $('.dragItem').removeClass('active')
        })
        $('.dragList').on('dragstart', '.dragItem', function (e) {
            startIndex = $(e.target).index()
            target = e.target
        })
    }

}
new classList().init()