$(function() {
    $('textarea').each(function(){
        var txt = $(this).val();
            $(this).val(
                txt.replace(/!\[image\]\((.+)\)/gi, '<img width=500 src="$1">')
            );
    });
});
