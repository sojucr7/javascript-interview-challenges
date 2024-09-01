
const asyncFn=(time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data")
        },time)
    })
}


const asyncRejectFn=(time)=>{
    return new Promise((resolve,reject)=>{ 
        setTimeout(()=>{
            reject("424 too many request")
        },time)
    })
}

const throttleAsync=async (promises,batchSize)=>{

    const totalBatches=Math.ceil(promises.length/batchSize)

    const results=[]

    for(let i=0;i<totalBatches;i++){
        let start=i*batchSize
        const chunks=promises.slice(start,batchSize+start).map((chunk)=>{
            return chunk()
        })
        try{
            results.push(...await Promise.all(chunks))
        }
        catch(e){
            throw e
        }
       
    }
    return results
}


const promises=[
    asyncFn.bind(this,100),
    asyncFn.bind(this,500),
    asyncRejectFn.bind(this,500),
    asyncFn.bind(this,1000),
    asyncFn.bind(this,1000),
    asyncFn.bind(this,1000),
    asyncFn.bind(this,1000),
    asyncFn.bind(this,1000),
]

throttleAsync(promises,2).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})