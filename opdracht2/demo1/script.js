if (document.body.classList && document.body.classList.contains) {
    var el = document.getElementById('tabs');

    var topKnop = document.getElementsByClassName('topknop');

    console.log(document.getElementsByClassName('topknop'));

    for (var i=0; i < topKnop.length; i++) {
        topKnop[i].classList.add('hidden');
    }

    function addStyle() {
        var selectContent = document.querySelectorAll('.content');
        
        for (var i=0; i < selectContent.length; i++) {
            if (selectContent[i].classList.contains('active')) {
                selectContent[i].style.display = 'block';
            } else {
                selectContent[i].style.display = 'none';
            }
        }  
        // event.preventDefault();
    }

    function onTabClick(){
        var selectActives = document.querySelectorAll('.active');

        // deactivate existing active tab and panel
        for (var i=0; i < selectActives.length; i++){
            selectActives[i].className = selectActives[i].className.replace(' active', '');
        }

        // activate new tab and panel
        event.target.className += ' active';
        document.getElementById(event.target.href.split('#')[1]).className += ' active';

        // Start new loop to set the right styles 
        addStyle();
        event.preventDefault();
    }
            
    addStyle();
    el.addEventListener('click', onTabClick, false);
}    