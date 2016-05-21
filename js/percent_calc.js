$(document).ready(function() {
  var how_much_input = $('#how_much'),
      how_much = 0,
      period = '',
      period_days = 0,
      percent = 0.001,
      your_get_span = $('#your-get'),
      your_return_span = $('#your-return');

  // Look for changes in the value
   how_much_input.bind("propertychange change click keyup input paste", function(event){
      // If value has changed...
      how_much = parseInt(how_much_input.val());
  
      if (how_much !== 0 && period_days !== 0) {

        your_get = parseFloat((percent * period_days * how_much).toFixed(2))
        your_get_span.text(your_get)
        your_return_span.text(your_get + how_much)
      };

      if (!how_much) {
        your_get_span.text(0)
        your_return_span.text(0)
      }
   });

   $('input:radio').change(
      function(){
          period = $(this).attr('id');
          if (period == "day") {
            period_days = 1;
          } else if (period == "week") {
            period_days = 7;
          } else if (period == "1month") {
            period_days = 30;
          } else if (period == "6month") {
            period_days = 30*6;
          } else if (period == "year") {
            period_days = 365;
          };

          if (how_much !== 0 && period_days !== 0) {
            your_get = parseFloat((percent * period_days * how_much).toFixed(2))
            your_get_span.text(your_get)
            your_return_span.text(your_get + how_much)
          };

          if (!how_much) {
            your_get_span.text(0)
            your_return_span.text(0)
          }
      }
    );
});
