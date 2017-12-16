/**
 * Created by leoxu on 5/4/2017 AD.
 */
function login() {

    var username = document.getElementById("username");
    var pass = document.getElementById("password");

    if (username.value == "") {

        alert("请输入用户名");

    } else if (pass.value  == "") {

        alert("请输入密码");

    } else if(username.value == "leoxu" && pass.value == "123456"){

        window.location.href="welcome.html";

    } else if(username.value == "yasuraokahanabi" && pass.value == "123456") {

        window.location.href="patient_zh.html";
    }
    else
    {
        alert("请输入正确的用户名和密码！")
    }
}

