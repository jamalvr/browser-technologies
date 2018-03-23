// Source: https://gist.github.com/Jiert/bbddb482c28f6c79cccc

(function(){

    console.log('hai');

    var el = document.getElementById('tabs');

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