$( document ).ready(function() {
  $( "#stage3" ).on( "click", function() {
    $('.phase-table').each(function() {
      var Process=$(this).find(".process-table").val();
      var AttributeID=$(this).find(".attributeid-table").val();
      var PhaseID=$(this).find(".phaseid-table").val();
      var ProcessID=$(this).find(".processid-table").val();
      var startdate=$(this).find(".startdate").val();
      var End=$(this).find(".end-table").val();      
      saveform3(ProcessID,PhaseID,startdate,End,AttributeID);
    });
    showsuccess();
  });
});
function saveform3(ProcessID,PhaseID,startdate,End,AttributeID) {
  $.ajax({
    url:  'saveform3.php',
    type: 'POST',
    async: true,
    data: { ProcessID: ProcessID,
            PhaseID: PhaseID,
            Start: startdate,
            End: End,
            AttributeID: AttributeID 
          },
    success: function(response) {
      console.log(response);
      $("#form1").submit(function() {
          return false;
      });  
    }  
  });
}
function showsuccess() {
  $.ajax({
    url:  'showsuccessphases.php',
    type: 'POST',
    async: true,
    data: { },
    success: function(response) {
      $('#message').html((response));
      $("#form1").submit(function() {
          return false;
      });
      setTimeout(function(){
        location.reload(); 
      }, 4000);
    }  
  });
}