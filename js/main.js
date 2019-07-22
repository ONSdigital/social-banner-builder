function setImg(input) {
  if (input.files && input.files[0]) {
    var chart = new FileReader();
    chart.onload = function(e) {
      $('.chart')
        .attr('src', e.target.result);
    };
    chart.readAsDataURL(input.files[0]);
  }
}

$('.chart').click(function(){ $('.fileupload').trigger('click'); });

$('[contenteditable]').on('paste', function(e) {
  e.preventDefault();
  var text = (e.originalEvent || e).clipboardData.getData('text/plain') || prompt('Paste something..');
  document.execCommand('insertText', false, text);
});


$(document).on('input change', '#slider', function() {
  $('#dynamicbanner').css('transform', 'scale(' + $(this).val() + ')');
});
