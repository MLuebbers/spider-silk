$(document).ready(function(){
    for(let i = 0; i < 1; i ++) {
        $("body").append(`<div class="fold"><div class=threads></div><div class=threads></div></div>`);
    }
    for(let i = 0; i < 16; i ++) {
        $(".threads").append("<div class=row></div>");
    }
    for(let i = 0; i < 96; i ++) {
        $(".row").append("<div class=col></div>");
    }
});

