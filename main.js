jQuery(function ($) {
    $('#example').DataTable( {
        "pagingType": "full_numbers"
    });


    var table = $('#example').DataTable();

    $('a').on( 'click', function () {
        var a = $(this).data("val");
        table.page.len(a).draw();
    });

});