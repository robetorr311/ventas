$( document ).ready(function() {
  $( "#stage2" ).on( "click", function() {
    $('.inputs-table').each(function() {
      var Process=$(this).find(".process-table").val();
      var AttributeID=$(this).find(".attributeid-table").val();
      var activity=$(this).find(".activity-table").val();
      var ProcessID=$(this).find(".processid-table").val();
      var startdate=$(this).find(".startdate").val();
      var End=$(this).find(".end-table").val();      
      saveform2(ProcessID,activity,startdate,End,AttributeID);
      $("#tab-finish").removeClass('disabled');
    });
    showform3();    
    $( "#stage1" ).hide();
    $( "#stage2" ).hide();
    $( "#stage3" ).show();    
    showsuccess();
  });
});
function saveform2(ProcessID,activity,startdate,End,AttributeID) {
  $.ajax({
    url:  'saveform2.php',
    type: 'POST',
    async: true,
    data: { ProcessID: ProcessID,
            activity: activity,
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
function showform3() {
  $.ajax({
    url:  'defform3.php',
    type: 'POST',
    async: true,
    data: { },
    success: function(response) {
      $('#defform3').html((response));
      $("#form1").submit(function() {
          return false;
      });
    }  
  });
}
function showsuccess() {
  $.ajax({
    url:  'showsuccess.php',
    type: 'POST',
    async: true,
    data: { },
    success: function(response) {
      $('#message').html((response));
      $("#form1").submit(function() {
          return false;
      });
    }  
  });
}