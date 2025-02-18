const likeBtn = document.querySelectorAll('.not')
const likedBtn = document.querySelectorAll('.like')
const deleteBtn = document.querySelectorAll('.del')

Array.from(likeBtn).forEach((el)=>{
    el.addEventListener('click', updateLike)
})

Array.from(likedBtn).forEach((el)=>{
    el.addEventListener('click', updateLike)
})

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deletePost)
})


async function updateLike(){
    const postId = this.parentNode.dataset.id
    const postLike = this.parentNode.dataset.like
    try{
        const res = await fetch('profile/updateLike', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'postIdFromJSFile': postId,
                "like": postLike
            })
        })
      location.reload()
      }catch(err){
        console.log(err)
    }
}


async function deletePost(){
    const postId = this.parentNode.dataset.id
    try{
        const res = await fetch('profile/deletePost', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'postIdFromJSFile': postId
            })
        })
        location.reload()
    }catch(err){
        console.log(err)
    }
}
