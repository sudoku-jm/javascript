//var totalItem = 0; //item개수를 셀 때 사용하는 변수.

function renameItem(){//수정기능
    var newSpan = prompt('리스트 수정');
    if(!newSpan||newSpan===""||newSpan===" "){
        return false;//빈칸입력방지
    }
    this.innerText = newSpan;
}

function removeItem(){ //삭제 기능
    var listItemId = this.id.replace('li_','');
    document.getElementById('li_'+listItemId).style.display = 'none';
}

function addNewItem(list,inputTxt){
   // totalItem++;

   var date = new Date();
   var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();
    
    /* updateItemStatus 함수를 만들어주기전.
    추가되는 li태그마다 번호를 매겨준다.
    item들의 상태를 업데이트 할 때, 해당 번호에 해당하는 li태그에 style을 적용하기 위해. */
    var listItem = document.createElement('li');
    listItem.id = "li_" + id;
    listItem.ondblclick = removeItem;

    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = 'cb_' + id;
    //checkBox.onclick = updateItemStatus;

    var span = document.createElement('span');
    span.id = 'span_' + id;
    span.innerText = inputTxt;
    span.onclick = renameItem;

    listItem.appendChild(checkBox);
    listItem.appendChild(span);   
    list.appendChild(listItem);

   // checkBox.onclick = updateItemStatus;
}

var newTxt = document.getElementById('newTxt');
newTxt.focus();
//console.log(btnNew);
newTxt.onkeyup = function(event){
    //console.log(event.which); 
    if(event.which === 13){//ENTER키 작동
        var inputTxt = newTxt.value;
        if(!inputTxt||inputTxt===""||inputTxt===" "){
            alert('5252 빈칸다메요!');
            return false;//빈칸입력방지
        }
        addNewItem(document.getElementById('list'),inputTxt); 
        newTxt.focus();
        newTxt.select();//이벤트 코드 안에 포커스 다시 잡아줌.
    }
    
}
