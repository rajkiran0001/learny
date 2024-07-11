let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');



$('#menu1 li').click(function(){
   $('#drop4').html($(this).text())

   var result = $.trim($('#drop4').text());
   if(result == "Chinese"){
   }
   if(result == "English") {
      $('#drop4').html($(this).text() + `<span class="flag-icon flag-icon-us"></span>`)
   }
   if(result == "Chinese") {
      $('#drop4').html($(this).text() + `<span class="flag-icon flag-icon-ch"></span>`)
   }
   if(result == "Spanish") {
      $('#drop4').html($(this).text() + `<span class="flag-icon flag-icon-es"></span>`)
   }
   if(result == "Arabic") {
      $('#drop4').html($(this).text() + `<span class="flag-icon flag-icon-arab"></span>`)
   }
   if(result == "Hindi") {
      $('#drop4').html($(this).text() + `<span class="flag-icon flag-icon-in"></span>`)
   }
   if(result == "French") {
      $('#drop4').html($(this).text() + `<span class="flag-icon flag-icon-fr"></span>`)
   }
   if(result == "German") {
      $('#drop4').html($(this).text() + `<span class="flag-icon flag-icon-de"></span>`)
   }
   
   })