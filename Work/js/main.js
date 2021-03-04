window.onscroll = function show_Header() {

   var header = document.querySelector('.wrapper');

   if (window.pageYOffset > 200) {
      header.classList.add('header_fixed');
   } else {
      header.classList.remove('header_fixed');
   }
}
