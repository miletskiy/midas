$(document).ready(function() {
  $('#applications .btn-modal-accept').click(function() {
      if (confirm('Accept this application?')) {
          $(this).parents('.card').remove();
          Materialize.toast('Accepted!', 4000);
      }
  });
  $('#applications .btn-modal-decline').click(function() {
      if (confirm('Decline this application?')) {
          $(this).parents('.card').remove();
          Materialize.toast('Declined.', 4000);
      }
  })
});
