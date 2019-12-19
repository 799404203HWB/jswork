
var inputs = document.getElementsByName('input');
for(var i = 0;i < inputs.length - 1; ++i){
    inputs[i].onblur = inputs;
}
function inputBlur(){
    var name = this.name;
    var val = this.value;
    var tips = this.placeholder;
    var tips_odj = this.parentNode.nextElementSibing;
    val = val.trim();
    if(!val) {
        error(tips_odj, '输入框不能为空');
        return false;
    }
    var reg_msg = getRegMsg(name,tips);
    if(reg_msg['reg'].test(val)){
        success(tips_odj,reg_msg['msg']['success']);
    }else{
        error(tips_odj, reg_msg['msg']['error']);
    }
}
function getRegMsg(name,tips){
    var reg = msg = ' ';
    switch(name){
        case 'username':
            reg =/^[a-zA-Z]{4,12}$/;
            msg = {'success':'用户名输入正确','error': tips};
            break;
        case 'pwd':
         reg = /^\w{6,20}$/;
         msg = {'success': '密码输入正确','error':tips};
         break;
         case 'repwd':
             var con = document.getElementsByTagName('input')[1].value;
             reg = RegExp("^" + con + "$");
             msg = {'success':'两次密码输入正确','error': '两次输入的密码不一样'};
             break;
             case 'tel':
                 reg = /^[34578]\d{9}$/;
                 msg = {'success': '手机号码输入正确', 'error':tips};
                 break;
                 case 'email':
                     reg = /^(w+(\_|\-|\.)*)+@(\w+(\-)?)+(\.\w{2,})+$/;
                     msg = {'success' : '邮箱输入正确', 'error': tips};
                     break;
    }
    return {'reg' :reg, 'msg':msg};
}
function success(odj,msg){
    odj.className = 'success';
    odj.innerHTML = msg;
}       
function success(odj,msg){
    odj.className = 'error';
    odj.innerHTML = msg +', 请重新输入';
}