


$(document).ready(function () {

    $(".info").hide();
    $(".btn").click(function () {
        $(".info").hide(1000);
        var showJsonVal = $(this).val();
        $(".info").eq(showJsonVal).show(1000);

    });

});

// $(document).ready(function () {
//     $(".btn").click(function () {
//         $("#third").show(1000);
//     });
//     $(".btn").click(function () {
//         $("#second").hide(1000);
//     });

// });

// $(document).ready(function () {
//     $(".btn").click(function () {
//         $("#forth").show(1000);
//     });
//     $(".btn").click(function () {
//         $("#third").hide(1000);
//     });

// });

// $(document).ready(function () {
//     $(".btn").click(function () {
//         $("#fifth").show(1000);
//     });
//     $(".btn").click(function () {
//         $("#sixth").hide(1000);
//     });

// });

// $(document).ready(function () {
//     $(".btn").click(function () {
//         $("#seven").show(1000);
//     });
//     $(".btn").click(function () {
//         $("#sixth").hide(1000);
//     });

// });
