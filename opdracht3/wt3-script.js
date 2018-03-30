if (document.documentElement.classList && document.documentElement.setAttribute) {
    
    var input = document.getElementById('search');

    // place 'onkeyup' in the searchbar to prefent errors when this function isn't supported
    input.setAttribute('onkeyup', 'searchFunction()')

    function searchFunction() {
        // Declare variables
        var filter, ol, li, span, i;
        filter = input.value.toUpperCase();
        ol = document.getElementById("contacts");
        li = ol.getElementsByTagName('li');

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            span = li[i].getElementsByTagName("span")[0];
            if (span.innerHTML.toUpperCase().indexOf(filter) >= 0) {
                li[i].classList.add('show');
                li[i].classList.remove('hide');
            } else {
                li[i].classList.add('hide');
                li[i].classList.remove('show');
            }
        }
    }
}