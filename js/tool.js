if (typeof x0p != 'function') {
    throw new Error('未引入x0p')
}

//工具
var TOOL = {

    //只有确定的x0p obj {title: 提示字,confirm: 点击确定执行的回调函数}
    c: function (obj) {
        x0p({
            title: obj.title || '提示',
            buttons: [
                {
                    type: "info",
                    text: "确定"
                }
            ]
        }, function (btn) {
            if (btn == 'info') {
                obj.confirm && obj.confirm()
            }
        })
    },

    // 确认和取消的x0p obj {title: 提示字,confirm: 点击确定执行的回调函数,cancel: 点击取消执行的回调函数}
    a: function (obj) {
        x0p({
            title: obj.title || '提示',
            buttons: [
                {
                    type: "info",
                    text: "确定"
                },
                {
                    type: "cancel",
                    text: "取消"
                }
            ]
        }, function (btn) {
            if (btn == 'info') {
                obj.confirm && obj.confirm()
            } else {
                obj.cancel && obj.cancel()
            }
        })
    },

    //初始化富文本 obj {el: 转化为富文本的选择器,config: 富文本功能自定义}
    getArea: function (obj) {
        var el = obj.el,
            config = obj.config || ['source', '|', 'bold', 'underline', 'italic', 'eraser', 'forecolor', '|', 'fontsize', 'unorderlist', 'orderlist', 'alignleft', 'aligncenter', 'alignright', 'table', '|']
        var editorAll
        editorAll = new wangEditor(el);
        editorAll.config.menus = config;
        editorAll.config.jsFilter = false;
        editorAll.create();
        editorAll.$editorContainer.css({
            'z-index': 10
        });
        return editorAll
    }
}


function readASBase(file, fb) {
    let fs = new FileReader();
    fs.readAsDataURL(file);
    var _this = this
    fs.onload = res => {
        let base64 = res.target.result
        let img = new Image()
        img.src = base64
        let size = parseInt((base64.length - base64.length / 8 * 2) / 1024)
        img.onload = function () {
            if (fb) {
                fb.call(_this, {
                    base64,
                    width: img.width,
                    height: img.height,
                    type: file.type.replace('image/', ''),
                    size
                })
            }
        }
    };
}