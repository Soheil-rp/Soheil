
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

setTimeout(function(){
  console.log("start");
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((Response) => Response.json())
  .then((json) => {
    console.log("end");
    console.log(json)
  
  let html = ""
  for( const user of json){

    html = html+`<tr>
                <td class="td-tr-2">${user.id}</td>
                <td class="td-tr-2">${user.name}</td>
                <td class="td-tr-2">${user.username}</td>
                <td class="td-tr-2">${user.email}</td>
                <td class="td-tr-2">${user.address.city}</td>
                  <a href="#"><i class="material-icons" style="color: green;">create</i></a>
                  <a href="#"><i class="material-icons" style="color: red;">close</i></a>
                </td>
              </tr>`
  }

  document.querySelector('.s').innerHTML=html


  })


},5000)