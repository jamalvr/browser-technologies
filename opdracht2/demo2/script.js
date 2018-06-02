// Handige bronnen: 
// https://www.hongkiat.com/blog/html5-dialog-window/
// http://thenewcode.com/957/Native-Modal-Windows-in-HTML5-Using-the-dialog-Element
// https://demo.agektmr.com/dialog/

// Eerst voor zorgen dat de dialogs werken samen met Javascript
// Als dialog 

// Getting the element and being able to show it 
var dialog = document.querySelector('dialog');
document.querySelector('#show').onclick = function () {
    dialog.show();
};
document.querySelector('#close').onclick = function () {
    dialog.close();
};