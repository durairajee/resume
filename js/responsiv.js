$(function (){
   $('#mobile_nav img').click(function (){
      $('#nav_bar_effect').show();
      $('.user_profile .user_navbar').show();
   });
   $('#nav_bar_effect').click(function (){
      $('.user_profile .user_navbar').hide();
      $('#nav_bar_effect').hide(); 
   });
   
   $('.user_profile .user_navbar .item').click(function (){
      if($(window).width() <= 900){
            $('.user_profile .user_navbar').hide();
            $('#nav_bar_effect').hide();
      } 
      index = $(this).attr('index-profile');
      $('.user_profile .profile_info_item:visible').hide();
      $('.user_profile .profile_info_item').eq(index).show();
   });
});