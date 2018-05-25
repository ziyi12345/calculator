function test(){
var first  =parseFloat(document.getElementById('first').value);
var count =parseFloat(document.getElementById('count').value);
var dv = parseFloat(document.getElementById('dv').value);
var i = 0;
var sum = 1.0;
var now = first;
alert("first is "+first+"count is "+count+"dv is "+dv+"now is"+now);
for(i=0;i<count;i++)
{sum = sum *first;
	first = first + dv;
	console.log(first);
}
    $.ajax({
        type : "POST",
        url : "sendMultiplication.php",
        success : function () {
            document.getElementById('message').innerText = sum;  //data即为后台返回的数据
        }
    });
}