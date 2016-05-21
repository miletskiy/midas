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
  $('.modal-trigger').leanModal();
  $('.modal-trigger-application-submitted').leanModal({
      complete: function() {
          window.location.href="borrower_profile.html";
      }
  });
  $('.modal-application-submitted').click(function() {
      window.location.href="borrower_profile.html";
  });
  $('.modal-trigger-lending-submitted').leanModal({
      complete: function() {
          window.location.href="lender_profile.html";
      }
  });
  $('.modal-lending-submitted').click(function() {
      window.location.href="lender_profile.html";
  });
});
