
 {/* $(document).ready(function () {
    const lista = {};
    $(document).on('change', "input[type='checkbox']",
      function () {
        if (this.checked) {
          lista[($(this).attr('data-id'))] = $(this).attr('data-name');
        } else {
          delete lista[($(this).attr('data-id'))];
        }
        $('div.amenities h4').html(Object.values(lista).join(', ') || '&nbsp;');
      });
    $.get('http://0.0.0.0:5001/api/v1/status/',function (data, statusText){     
          if (statusText === "success") {
              if (data.status == 'OK') {
                  $('div#api_status').addClass('available');
              } else {
                  $('div#api_status').removeClass('available');
              }
          }
       });
       $.ajax({
         type:'POST',
         url:'http://0.0.0.0:5001/api/v1/places_search',
         dataType : 'json',
         contentType: 'application/json',
         data: '{}',
         success: function (data){
           for (let i = 0; i < data.length; i++) {
             let place = data[i];
             $('.places ').append('<article><h2>' + place.name + '</h2><div class="price_by_nigh>          }
       }
     });
});
*/}