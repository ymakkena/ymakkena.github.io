 $(function() {
        $("#sidebargif").hover(
            function() {
                $(this).attr("src", "images/sidebar.gif");
            },
            function() {
                $(this).attr("src", "images/sidebar-static.gif");
            }                         
        );                  
    });