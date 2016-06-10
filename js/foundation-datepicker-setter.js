$(document).ready(function () {
    "use strict";
    $(document).foundation();

    //    DatePicker
    // implementation of disabled form fields
    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

    var checkin = $('#dpd1,#txtFromDate').fdatepicker({
        format: "dd/mm/yyyy",
        onRender: function (date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        }
    }).data('datepicker');

    var checkout = $('#dpd2,#txtToDate').fdatepicker({
        format: "dd/mm/yyyy",
        onRender: function (date) {
            return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function (ev) {
        checkout.hide();
    }).data('datepicker');

    $("#dpd1,#dpd2,#txtFromDate,#txtToDate").fdatepicker({
          autoclose: true,
          format: "dd/mm/yyyy",
          disableDblClickSelection: true,
          todayHighlight: true
      });
});

