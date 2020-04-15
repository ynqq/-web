
function login() {
    sessionStorage.power = 0
    if(sessionStorage.power == 0){
        window.location.href = './html/userManager.html'
    }else{
        window.location.href = './html/charts.html'
    }

    console.log($('.username').val());
    console.log($('.userpass').val());

    $.ajax({

        url: urlIp + 'getteacherInfo',
        type: "POST",
        data: {
            "phone": $('.username').val(),
            "teacherPassWord":$('.userpass').val()
        },
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function (info) {
            console.log(info);
            // window.location.href = './html/index.html'
            if(info!=null){
                sessionStorage.setItem("teacherName",info.teacherName);
                sessionStorage.setItem("teacherCode",info.teacherCode);
                sessionStorage.setItem("phone",info.phone);
                sessionStorage.setItem("teacherPassWord",info.teacherPassWord);
                sessionStorage.setItem("power",info.power);
                if(info.power==0){
                    window.location.href = './html/college/collegeList.html'
                }else{
                    window.location.href = './teacherhtml/teacher/teachercurriculumList.html'
                }
                
            
            }else{
                x0p("登录失败");
            }
        },
        error: function (err) {
            if (window.console) {
                console.log(err)
            }
        }
    })
}

$('.login').click(function () {
    login();
})
