

// AJAX call to fetch data 
const getList=async ()=>{
    try{
        await $.get('https://jsonplaceholder.typicode.com/todos',function(data){
            const list=data;
            let listcontent='';
            list.forEach((el,index)=>{
                listcontent+=`<li class="list-group-item ${el.completed?'disabledList':''} ${index%2?'list-group-item-info':'list-group-item-success'}" > <input type="checkbox" class="checkbox" ${el.completed?' checked':''}/> <label for=""> ${el.title}</label></li>`
            });
            $('#button').hide();
            $('#todoList').html(listcontent);
         });
    }
    catch(e){
        console.log('failed to fetch lists data',e);
    }
}

$('#button').on('click',(e)=>{
    e.preventDefault();
    getList();
});


let checkedCount=0;

//Promise call to alert on completion of 5 tasks
const promiseCall=()=>{
        return new Promise((resolve,reject)=>{
            if(checkedCount===5){
               resolve(checkedCount)
           }
           else{
               reject('count not equal to 5');
           }
       })
    .then(()=>{
        alert(`Congratulation, You have completed 5 tasks!!`);
        
    })
    .catch((err)=>{
        console.log('promise rejected');
    })
}


$('#todoList').on('change','.checkbox',function(e){
    if($(this).prop('checked')===true){
        checkedCount++; 
        $(this).parent().addClass('active'); 
    }
    else{
        checkedCount--;
        $(this).parent().removeClass('active');
    }
    
    promiseCall();
});























