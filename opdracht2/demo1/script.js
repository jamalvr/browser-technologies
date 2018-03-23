// Source: https://gist.github.com/Jiert/bbddb482c28f6c79cccc

(function(){

    // var app = {
    //     tabs: function() {
    //         var tabNav = document.getElementsByClassName('tab');
    //         var tabContent = document.getElementsByClassName('content');
            
    //         for (var i=0; i < tabNav.length; i++){
    //             tabNav[i].addEventListener('click', function(href) { 
    //                 var href = this.getAttribute('href');
    //                 var clearHref = href.replace('#', '')
    //                 showContent(clearHref);
    //             });
    //             // console.log(href);

    //             function showContent(clearHref) {
    //                 console.log(clearHref); 
    //                 for (var i=0; i < tabContent; i++){
    //                     if (clearHref === tabContent[i].id) {
    //                         tabContent[i].style.display = 'block';
    //                     } else {
    //                         tabContent[i].style.display = 'none';
    //                     }
    //                 }
    //             }
    //             showContent('tab-1');
    //         }
    //     }
    // }
    // app.tabs()

    console.log('hai');

    var el = document.getElementById('tabs');

    // function addStyle() {
        // for (var i=0; i < selectContent.length; i++) {
        //     if (selectContent[i].classList.contains('active') && selectContent[i].classList.contains('content')) {
        //         selectContent[i].style.display = 'block';
        //     } else {
        //         selectContent[i].style.display = 'none';
        //     }
        // }   
    // }
    
    function addStyle() {
        var selectContent = document.querySelectorAll('.content');
        
        for (var i=0; i < selectContent.length; i++) {
            // console.log(selectContent[i].classList.contains('active'));
            if (selectContent[i].classList.contains('active')) {
                selectContent[i].style.display = 'block';
            } else {
                selectContent[i].style.display = 'none';
            }
        }  
    }

    function onTabClick(event){
        var selectActives = document.querySelectorAll('.active');

        // deactivate existing active tab and panel
        for (var i=0; i < selectActives.length; i++){
            selectActives[i].className = selectActives[i].className.replace(' active', '');
        }

        // activate new tab and panel
        event.target.className += ' active';
        document.getElementById(event.target.href.split('#')[1]).className += ' active';

        event.preventDefault();

        addStyle();
    }

    addStyle();

    el.addEventListener('click', onTabClick, true);
})();