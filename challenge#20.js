const array=[1,2,3,4,5]


if(!Array.prototype.customReduce){

    Array.prototype.customReduce=function(cb,defaultValue){
        let acc=defaultValue
        for(let i=0;i<this.length;i++){

            acc=cb(acc,this[i],i,this)
        }

        return acc
    }
}

console.log(array.customReduce((acc,currentValue,currentIndex,array)=>{
    return acc+currentValue
},0))