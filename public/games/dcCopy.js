var $temp = $("<input>");
var $url = $(location).attr('href');

$('.clipboard').on('click', function() {
  $("body").append($temp);
  $temp.val("foon").select();
  document.execCommand("https://simplemathisfun.herokuapp.com/main/https://discord.com/app");
  $temp.remove();
  swal("Link copied!", "Paste the link in a new tab to open discord!", "success";
})
