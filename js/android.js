if (window.innerWidth && window.innerWidth <= 480) { 
    $(document).ready(function(){ 
        $('#header ul').addClass('hide'); 
        $('#content table').toggleClass('hide');
        
    });
    
    function toggleMenu() { 
        $('#header ul').toggleClass('hide'); 
        $('#content table').toggleClass('hide'); 
        $('#header.rightButton').toggleClass('pressed'); 
    }
}
