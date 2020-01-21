// $(document).ready(function(){
//     for(let i = 0; i < 3; i ++) {
//         $("body").append(`<table class=threads style=transform:skewY(${(i % 2) * (-15)}deg);></table>`);
//     }
//     for(let i = 0; i < 8; i ++) {
//         $(".threads").append("<tr></tr>");
//     }
//     for(let i = 0; i < 32; i ++) {
//         $("tr").append("<td></td>");
//     }
// });
// style=transform:skewY(${(i % 2) * (-15)}deg);
$(document).ready(function(){
    for(let i = 0; i < 6; i ++) {
        $("body").append(`<div class="fold"><div class=threads></div><div class=threads></div></div>`);
    }
    for(let i = 0; i < 8; i ++) {
        $(".threads").append("<div class=row></div>");
    }
    for(let i = 0; i < 32; i ++) {
        $(".row").append("<div class=col></div>");
    }
});

