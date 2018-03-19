// Source: https://gist.github.com/Jiert/bbddb482c28f6c79cccc

(function(){
    console.log('hai');

    var el = document.getElementById('tabs');

    function onTabClick(event){
        console.log('ik doe het ook');

        var selectActives = document.querySelectorAll('.active');

        // deactivate existing active tab and panel
        for (var i=0; i < selectActives.length; i++){
            selectActives[i].className = selectActives[i].className.replace(' active', '');
        }

        // activate new tab and panel
        event.target.parentElement.className += ' active';
        document.getElementById(event.target.href.split('#')[1]).className += ' active';

        event.preventDefault();
    }

    el.addEventListener('click', onTabClick, false);
})();