function goldbach(){
    let a = parseFloat(document.getElementById('odd').value)
    if(isNaN(a)){
        alert('请输入数字')
        return false
    }else{
        isTrue(a)
    }
    return 
}

function zhiShu(num){
    var sum=0;
    for(var d=1;d<=num;d++){
        if(num%d==0){
            sum++;
        }
    }
    if(sum==2){
        return true;
    }else{
        return false;
    }
}
    function isTrue(a){
        let Str="";
    for(var b=2;b<a-2;b++){
    var c=a-b;
    if(zhiShu(b) && zhiShu(c) &&b<=c){
       Str += (a+"可以拆分为质数"+b+"+"+c+"的和"+'<br/>')
       document.getElementById('goldbach').innerHTML = Str
        }
    } 
   
 }