// // document.getElementById('owl').onclick = function(){
// //     alert("owl clicked") 
// // }// doesnt give propogation ability

// document.getElementById('owl').addEventListener('click',function(){
//     console.log(e);
// },false)
// //attachEvent--- old

// // type,timestamp,defaultPrevented --- study in eventlistener,target,toelement,secElement,pos

// document.getElementById('images').addEventListener('click',function(){
//     console.log('clicked inside the ul');
// },false)

// document.getElementById('owl').addEventListener('click',function(e){
//     console.log('owl');
//     e.stopPropagation()
// },false)
// // takes piority over images 
// // if truw , images takes priority // bubbling of elements

// document.getElementById('google').addEventListener
// ('click' , function(e) {
//     e.preventDefault()
//     e.stopPropagation()
//     console.log('google clicked')
// })

document.querySelector('#images').addEventListener(
    'click' , function (e){
        console.log(e.target.parentNode);
        if (e.target.tagName === "IMG"){
            console.log(e.target.tagName)
            let rem = e.target.parentNode
            rem.remove()
            // rem.parentNode.removeChild(rem)
        }
    }
,false)