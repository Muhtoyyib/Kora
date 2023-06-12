// let showNav = () =>{
//     let navLink = document.getElementById('nav-list');
//    // navLink.style.display = 'block';

//     if(navLink.style.display == 'block'){
//         navLink.style.display == 'none';
//     } else{
//         navLink.style.display =='block';
//     }
// }

$(document).ready(function(){
    $(".icon").click(function(){
      $(".nav-list").toggleClass("nav-list-display");
    });
});