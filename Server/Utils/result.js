function createResult(error,data){
    if(data){
        return createSuccessfulResult(data)

    }
    else{
        return createErrorResult(error)
    }
}
function createErrorResult(error){
    if(error){
        return{status:'error',error:error}
    }
}
function createSuccessfulResult(data){
    return {status:'success',data:data}
}
module.exports={createErrorResult,createResult,createSuccessfulResult}