function test(){
    var first  =parseFloat(document.getElementById('first').value);
    var count =parseFloat(document.getElementById('count').value);
    var dv = parseFloat(document.getElementById('dv').value);
    var i = 0;
    var sum = 0;
    var now = first;
    alert("first is "+first+"count is "+count+"dv is "+dv+"now is"+now);
    if (dv === 0){
        alert("dv is not allowed to be set to 0.");
    }else if(dv === 1.0)
    {
        sum = count*first;
    }else{
    for(i=0;i<count;i++)
    {sum = sum +first;
        first = first * dv;
        console.log(first);
    }
    }
    $.ajax({
        type : "POST",
        url : "sendMultiplication.php",
        success : function () {
            document.getElementById('message').innerText = sum;  //data即为后台返回的数据
        }
    });
}