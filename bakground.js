document.addEventListener("click", function(evnt){
    
    setTimeout(function(){
        let arr = document.querySelectorAll("[id^='zk_err']");;
        arr.forEach(a=>{
            a.parentNode.removeChild(a);
        });

     
    }, 1000);
    
});


