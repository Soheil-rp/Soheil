
 document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems, {});


  //   const adduserButton = document.getElementById('auto-user-buttom')
  //   adduserButton=document.addEventListener('click', ()=>{
  // document.querySelector('.auto-modal-user').classList.add('show')
  // document.querySelector('.auto-modal-user-back').classList.remove('dis-none')
  //   })
  //   document.querySelector('.auto-modal-user-back').addEventListener('click', (elems)=>{
  //     document.querySelector('.auto-modal-user').classlist.remove('show')
  //     elems.target.classList.add('dis-none')
  //   }) 
   });
 const showmodal = ()=>{
 console.log("showmodal")
 document.querySelector('.auto-modal-user-back').classList.add('show')
 document.querySelector('.auto-modal-user-back').classList.remove('dis-none')
}
const autoicon  =  ()=>{
  console.log("autoicon")
document.querySelector('.auto-modal-user-back').classList.remove('show')
document.querySelector('.auto-modal-user-back').classList.add('dis-none')
}
// const autoicon2 =  ()=>{
//   console.log("autoicon2")
//   document.querySelector('.collapsible-header').classList.add('collapsible-body')
// }