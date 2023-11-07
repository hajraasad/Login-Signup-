// export  const state =(num) => {
//     return {
//         type: "Blogs",
//         payload:num
//     }
// }
// export  const state2 =(num) => {
//     return {
//         type: "Filtered",
//         payload:num
//     }
// }

export const addBlog=(value)=>
{
    return{
        type:"ADD",
        payload:value
    }

}