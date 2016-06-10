
$(document).ready(function () {
//    "use strict";
    $(document).foundation();

    $('#btnCalc').click(function () {

        var fBDate1 = $('#txtFromDate').fdatepicker({ dateFormat: 'dd,MM,yyyy' }).val();
        var TBDate = $('#txtToDate').fdatepicker({ dateFormat: 'dd,MM,yyyy' }).val();

        console.log('fBDate1', fBDate1);
        console.log('TBDate', TBDate);

        if (fBDate1 == "") {
            alert('Please Select From date ');
            $('#txtFromDate').focus();
            return false;
        }
        if (TBDate == "") {
            alert('Please Select To Date');
            $('#txtToDate').focus();
            return false;
        }
        var aFromDate = fBDate1.split("/");
        var fdd1 = aFromDate[0]; //get the day part- From date
        var fmm1 = aFromDate[1]; //get the month part- From date
        var fyyyy1 = aFromDate[2]; //get the year part- From date
        var fromDate = new Date(parseFloat(fyyyy1), parseFloat(fmm1 - 1), parseFloat(fdd1, 10));
        var aToDate = TBDate.split("/");
        var tdd1 = aToDate[0]; //get the day part-To date
        var tmm1 = aToDate[1]; //get the month part-To date
        var tyyyy1 = aToDate[2]; //get the year part-To date
        var toDate = new Date(parseFloat(tyyyy1), parseFloat(tmm1 - 1), parseFloat(tdd1, 10));
        if (fromDate > toDate) {
            alert('From date should not be greater than To Date');
            $('#txtFromDate').focus();
            $('#txtFromDate').value = "";
            return false;
        }
        // //debugger;
        var differenceTravel = toDate.getTime() - fromDate.getTime();
        YearDifferenceTravel = Math.floor(differenceTravel / 1000 / 60 / 60 / 24 / 365);
        var month = toDate.getMonth() - fromDate.getMonth() + (12 * (toDate.getFullYear() - fromDate.getFullYear()));
        var diffDays = Math.abs((differenceTravel) / (1000 * 60 * 60 * 24));
        var hours = Math.abs((differenceTravel) / (1000 * 60 * 60));
        var minutes = Math.abs((differenceTravel) / (1000 * 60));
        var seconds = Math.abs((differenceTravel) / (1000));
        var difference_ms = differenceTravel;

        document.getElementById("tdYear").innerHTML = YearDifferenceTravel;
        document.getElementById("tdMonths").innerHTML = month;
        document.getElementById("tdDays").innerHTML = diffDays;
        document.getElementById("tdHrs").innerHTML = hours;
        document.getElementById("tdminuts").innerHTML = minutes;
        document.getElementById("tdseconds").innerHTML = seconds;
        document.getElementById("tdmileSec").innerHTML = difference_ms;


    });

//    $('#btnCalc').click(function () {
//        var fBDate1 = document.getElementById("txtFromDate").value;
//        var TBDate = document.getElementById("txtToDate").value;
//        if (fBDate1 == "") {
//            alert('Please Select From date ');
//            document.getElementById("txtFromDate").focus();
//            return false;
//        }
//        if (TBDate == "") {
//            alert('Please Select To Date');
//            document.getElementById("txtToDate").focus();
//            return false;
//        }
//        var aFromDate = fBDate1.split("/");
//        var fdd1 = aFromDate[0]; //get the day part- From date
//        var fmm1 = aFromDate[1]; //get the month part- From date
//        var fyyyy1 = aFromDate[2]; //get the year part- From date
//        var fromDate = new Date(parseFloat(fyyyy1), parseFloat(fmm1 - 1), parseFloat(fdd1, 10));
//        var aToDate = TBDate.split("/");
//        var tdd1 = aToDate[0]; //get the day part-To date
//        var tmm1 = aToDate[1]; //get the month part-To date
//        var tyyyy1 = aToDate[2]; //get the year part-To date
//        var toDate = new Date(parseFloat(tyyyy1), parseFloat(tmm1 - 1), parseFloat(tdd1, 10));
//        if (fromDate > toDate) {
//            alert('From date should not be greater than To Date');
//            document.getElementById("txtFromDate").focus();
//            document.getElementById("txtFromDate").value = "";
//            return false;
//        }
//        // //debugger;
//        var differenceTravel = toDate.getTime() - fromDate.getTime();
//        YearDifferenceTravel = Math.floor(differenceTravel / 1000 / 60 / 60 / 24 / 365);
//        var month = toDate.getMonth() - fromDate.getMonth() + (12 * (toDate.getFullYear() - fromDate.getFullYear()));
//        var diffDays = Math.abs((differenceTravel) / (1000 * 60 * 60 * 24));
//        var hours = Math.abs((differenceTravel) / (1000 * 60 * 60));
//        var minutes = Math.abs((differenceTravel) / (1000 * 60));
//        var seconds = Math.abs((differenceTravel) / (1000));
//        var difference_ms = differenceTravel;
//
//        document.getElementById("tdYear").innerHTML = YearDifferenceTravel;
//        document.getElementById("tdMonths").innerHTML = month;
//        document.getElementById("tdDays").innerHTML = diffDays;
//        document.getElementById("tdHrs").innerHTML = hours;
//        document.getElementById("tdminuts").innerHTML = minutes;
//        document.getElementById("tdseconds").innerHTML = seconds;
//        document.getElementById("tdmileSec").innerHTML = difference_ms;
//
//        return true;
//    }

});
