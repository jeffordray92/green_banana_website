$(document).on('click', '#proj-info-link', function(event) {
    window.location = $(this).attr('href');
});

function misc(){
     // portfolio
     $('.gallery ul li a').click(function() {
         var itemID = $(this).attr('href');
         $('.gallery ul').addClass('item_open');
         $(itemID).addClass('item_open');
         return false;
     });
     $('.close').click(function() {
         $('.port, .gallery ul').removeClass('item_open');
         return false;
     });

     $(".gallery ul li a").click(function() {
         $('html, body').animate({
             scrollTop: parseInt($("#top").offset().top)
         }, 400);
     });
}

function bookForm(){

    function floatLabel(inputType){
        $(inputType).each(function(){
            var $this = $(this);
            // on focus add cladd active to label
            $this.focus(function(){
                $this.next().addClass("active");
            });
            //on blur check field and remove class if needed
            $this.blur(function(){
                if($this.val() === '' || $this.val() === 'blank'){
                    $this.next().removeClass();
                }
            });
        });
    }
    // just add a class of "floatLabel to the input field!"
    floatLabel(".floatLabel");
}
function tabs(){
    // Variables
    var clickedTab = $(".tabs > .active");
    var tabWrapper = $(".tab__content");
    var activeTab = tabWrapper.find(".active");
    var activeTabHeight = activeTab.outerHeight();
    
    // Show tab on page load
    activeTab.show();
    
    // Set height of wrapper on page load
    tabWrapper.height(activeTabHeight);
    
    $(".tabs > li").on("click", function() {
        
        // Remove class from active tab
        $(".tabs > li").removeClass("active");
        
        // Add class active to clicked tab
        $(this).addClass("active");
        
        // Update clickedTab variable
        clickedTab = $(".tabs .active");
        
        // fade out active tab
        activeTab.fadeOut(250, function() {
            
            // Remove active class all tabs
            $(".tab__content > li").removeClass("active");
            
            // Get index of clicked tab
            var clickedTabIndex = clickedTab.index();

            // Add class active to corresponding tab
            $(".tab__content > li").eq(clickedTabIndex).addClass("active");
            
            // update new active tab
            activeTab = $(".tab__content > .active");
            
            // Update variable
            activeTabHeight = activeTab.outerHeight();
            
            // Animate height of wrapper to new tab height
            tabWrapper.stop().delay(50).animate({
                height: activeTabHeight
            }, 500, function() {
                
                // Fade in active tab
                activeTab.delay(50).fadeIn(250);
                
            });
        });
    });
    
    // Variables
    var colorButton = $(".colors li");
    
    colorButton.on("click", function(){
        
        // Remove class from currently active button
        $(".colors > li").removeClass("active-color");
        
        // Add class active to clicked button
        $(this).addClass("active-color");
        
        // Get background color of clicked
        var newColor = $(this).attr("data-color");
        
        // Change background of everything with class .bg-color
        $(".bg-color").css("background-color", newColor);
        
        // Change color of everything with class .text-color
        $(".text-color").css("color", newColor);
    });
}

function menuIcon() {
    $("#menu-open").click(function(){

        
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            TweenMax.to($('.hidden-menu'), 0.5, {
                display: "none",
                autoAlpha: 0,
                ease: SlowMo.easeOut
            }, 1);

            TweenMax.to($('html'), 0.5, {
                "overflow-y": "scroll",
                ease: SlowMo.easeOut
            }, 1);

            $('.fog ').foggy({
               blurRadius: 0,          // In pixels.
               opacity: 1,           // Falls back to a filter for IE.
               cssFilterSupport: true  // Use "-webkit-filter" where available.
             });
        }
        else{
            $(this).addClass("active");
            TweenMax.to($('.hidden-menu'), 0.5, {
                display: "block",
                autoAlpha: 1,
                ease: SlowMo.easeOut
            }, 1);

            TweenMax.to($('html'), 0.5, {
                overflow: "hidden",
                ease: SlowMo.easeOut
            }, 1);


            $('.fog ').foggy({
               blurRadius: 5,          // In pixels.
               opacity: 0.7,           // Falls back to a filter for IE.
               cssFilterSupport: true  // Use "-webkit-filter" where available.
             });

        }
    })
}

function scrollSmooth() {
    // handle links with @href started with '#' only
    $(document).on('click', 'a[href^="#"]', function(e) {
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $(id).offset().top;

        // animated top scrolling
        $('body, html').animate({scrollTop: pos}, 700);
    });

}    

function isotoper(){

    var $container = $('.acc-list').isotope({
        itemSelector: '.masonry-item',
        layoutMode: 'masonry',
        masonry: {
          gutter: '.gutter-sizer',
          columnWidth: '.grid-sizer'
        }
    });
}

$(document).ready(function() {
    misc();
    scrollSmooth(); 
    menuIcon();
    bookForm();
    tabs();
    isotoper();
});

$(window).load(function() {

});

$(window).on('resize', function() {

});
