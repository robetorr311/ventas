$( document ).ready(function() {
  $( "#stage2" ).hide();
  $( "#stage3" ).hide();
  $("#tab-dates").addClass('disabled');
  $("#tab-finish").addClass('disabled');
  $("#activity").on("change", function(){
    var activity=$('#activity').val();
    if(!activity) { $('#activity_msg').html('<div class="alert alert-danger">Please enter activity </div>'); } else { $('#activity_msg').html(''); }
  });
  $("#ProcessID").on("change", function(){
    var ProcessID=$('#ProcessID').val();
    if(!ProcessID) { $('#ProcessID_msg').html('<div class="alert alert-danger">Please choose process </div>'); } else { $('#ProcessID_msg').html(''); }
  });  
  $( "#addactivity" ).on( "click", function() {
    var err=0;
    var ProcessID=$('#ProcessID').val();
    var AttributeID=$('#AttributeID').val();
    var activity=$('#activity').val();
    if(!ProcessID) err=1;
    if(!AttributeID) err=1;    
    if(!activity) err=1;
    if(err>0){
      if(!activity) { $('#activity_msg').html('<div class="alert alert-danger"><strong> Activity </strong> Please enter activity </div>'); } else { $('#activity_msg').html(''); }
      if(!ProcessID) { $('#ProcessID_msg').html('<div class="alert alert-danger"><strong> Process </strong> Please choose process </div>'); } else { $('#ProcessID_msg').html(''); }     
      if(!AttributeID) { $('#AttributeID_msg').html('<div class="alert alert-danger"><strong> Attribute </strong> Please choose attribute </div>'); } else { $('#AttributeID_msg').html(''); }     
    }
    else{
      addactivities(activity,ProcessID,AttributeID);      
    }
  });
  $( "#stage1" ).on( "click", function() {
    getform2();
    $( "#stage1" ).hide();
    $( "#stage2" ).show();
    $( "#stage3" ).hide();
    $("#tab-dates").removeClass('disabled');
  });
});
function addactivities(activity,ProcessID,AttributeID) {
  $.ajax({
    url:  'activitytable.php',
    type: 'POST',
    async: true,
    data: { activity: activity,
            ProcessID: ProcessID,
            AttributeID: AttributeID
          },
    success: function(response) {      
      $('#activitytable').html((response));
      $( "#stage1" ).prop('disabled',false);
      getform2();
      $('#activity').val('');
      $('#ProcessID').val('');
      $('#ProcessID').change();
      $('#AttributeID').val('');
      $('#AttributeID').change();
      $('#activity_msg').html('');
      $('#ProcessID_msg').html(''); 
      $("#formulario").submit(function() {
          return false;
      });  
    }  
  });
}
function getform2() {
  $.ajax({
    url:  'defform2.php',
    type: 'POST',
    async: true,
    data: { },
    success: function(response) {
      $('#defform2').html((response));
      $(".process-table").prop('disabled',true);
      $(".activity-table").prop('disabled',true);
      $("#formulario").submit(function() {
          return false;
      });  
    }  
  });
}