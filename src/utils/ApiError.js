class ApiError extends Error{
    constructor(
        statusCode,
        message = "SomeThing Went Wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(statck){
            this.stack = statck
        }else{
            Error.captureStackTrace(this,this.construct)
        }
    }
} 

export {ApiError}