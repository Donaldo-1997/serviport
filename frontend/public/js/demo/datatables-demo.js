// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
    scrollY: 400,
    "lengthMenu": [ 5, 10, 20 ]
  });
});
