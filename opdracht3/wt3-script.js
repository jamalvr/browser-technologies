if (document.documentElement.classList) {
    function searchFunction() {
        // Declare variables
        var input, filter, ol, li, span, i;
        input = document.getElementById('search');
        filter = input.value.toUpperCase();
        ol = document.getElementById("contacts");
        li = ol.getElementsByTagName('li');

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            span = li[i].getElementsByTagName("span")[0];
            if (span.innerHTML.toUpperCase().indexOf(filter) >= 0) {
                li[i].classList.add('show'); // Feature detect voor classlist schrijven
                li[i].classList.remove('hide');
            } else {
                li[i].classList.add('hide');
                li[i].classList.remove('show');
            }
        }
    }
}