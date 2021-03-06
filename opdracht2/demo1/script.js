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

        // Start new loop to set the right styles 
        addStyle();

        event.preventDefault();
    }
            
    addStyle();
    el.addEventListener('click', onTabClick, false);
}    

// https://caniuse.com/#search=parentnode
if (document.documentElement.parentNode) {
    // modal met dialog element
    var dialog = document.querySelector('dialog');

    if ('open' in dialog) {
        // // Dynamisch de dialog button aanmaken wanneer dialog available is
        // button = document.createElement('button');
        // showText = document.createTextNode('License')
        // button.appendChild(showText);
        // button.id = 'show';

        // // dynamische button toevoegen aan de header
        // header = document.getElementById('top');
        // header.appendChild(button);

        // Show & close van de dialog
        document.querySelector('#show').onclick = function () {
            dialog.show();
        };
        document.querySelector('#close').onclick = function () {
            dialog.close();
        };
    } else {
    // Replace dialog element with div
        var div = document.createElement('div');
        // Keep HTML content even in the element changes
        div.innerHTML = dialog.innerHTML;
        // Replace the dialog element with div
        var newDiv = dialog.parentNode.replaceChild(div, dialog);
        // Add dialog class with CSS target styling 
        div.classList.add('dialog');
        div.id = 'dialog';

    // Close button replacement
        var closeButton = document.getElementById('close');
        var closeLink = document.createElement('a');
        closeButton.parentNode.replaceChild(closeLink, closeButton);
        closeLink.innerHTML = 'Close';
        closeLink.href = '#';
       
    // Show button replacement
        var showButton = document.getElementById('show');
        var showLink = document.createElement('a');
        showButton.parentNode.replaceChild(showLink, showButton);
        showLink.innerHTML = 'License';
        showLink.href = '#dialog';   
    }
}