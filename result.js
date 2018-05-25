function test(){
var first  = document.getElementById('first').value;
var count =document.getElementById('count').value;
var dv = document.getElementById('dv').value;
var sum = 0;
 sum = first*count+(count*(count-1)*dv)/2.0;


    $.ajax({
        type : "POST",
        url : "sendMultiplication.php",
        success : function () {
            document.getElementById('message').innerText = sum;  //data即为后台返回的数据
        }
    });
}