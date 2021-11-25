export function _if(condition: any, object: any, whenFalse?: any){
    try{
        return condition ? object : whenFalse ?? ''
    }catch{
        return whenFalse ?? ''
    }
}

