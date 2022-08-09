$(document).scroll(function () {
  const s_top = $('body').scrollTop();
  const yes = $('#Cases').offset().top;
  if (s_top > yes) {
    console.log('Yes');
  }
});
