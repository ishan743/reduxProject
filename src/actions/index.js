export const AddToWishlist=(data)=>{
    return {
        type:"Add",
        payload:data
    }
}
export const RemoveFromWishlist=(data)=>{
    return {
        type:"Remove",
        payload:data
    }
}
