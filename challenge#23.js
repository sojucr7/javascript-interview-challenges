const hello = once((a,b) => console.log(`hello ${a} ${b}`));

hello(1,3);
hello(2,5);


function once(cb){
    let executed=false
    return function (...params){
        if(executed==false){
            cb(...params)
            executed=true
        }  
    }
}

//A closure is a function that retains access to its lexical scope.
//Even if the outer function has finished executing, 
//the inner function (closure) still has access to its variables