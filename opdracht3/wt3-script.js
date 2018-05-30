// Accordion
if (document.querySelectorAll && document.body.classList && document.body.classList.toggle && document.body.classList.contains && document.body.classList.remove) {

    function changeLinks(changedLinks) {
        var links = document.querySelectorAll('#contacts a')

        for (var i = 0; i < links.length; i++) {
            // change href for the accordion
            links[i].href = "#content" + i;

            // Add required class for the accordion toggle
            links[i].classList.add('accordion-toggle');
        }

        return changedLinks;
    };

    // Execute changeLinks so all the classes are added for the toggle
    changeLinks();

    function addContent() {
        var allContacts = document.getElementsByClassName('accordion-toggle');

        for (var i = 0; i < allContacts.length; i++) {
            // Naam
            var contactName = document.createElement('h2');
            var contactNameText = document.createTextNode('Contactgegevens');
            contactName.appendChild(contactNameText);

            // Age
            var aboutContactAge = document.createElement('li');
            var aboutContactAgeText = document.createTextNode('Age: 29');
            aboutContactAge.appendChild(aboutContactAgeText);

            // Day of birth
            var aboutContactBday = document.createElement('li');
            var aboutContactBdayText = document.createTextNode('Birthday: 1-1-1989');
            aboutContactBday.appendChild(aboutContactBdayText);

            // Number
            var contactNumber = document.createElement('li');
            var contactNumberLink = document.createElement('a');
            contactNumber.appendChild(contactNumberLink);

            var contactNumberText = document.createTextNode('Phone: 0612345678');
            contactNumberLink.appendChild(contactNumberText);
            
            contactNumberLink.href = "+31612345678";

            // List
            var aboutContactList = document.createElement('ul');
            aboutContactList.appendChild(aboutContactAge);
            aboutContactList.appendChild(aboutContactBday);
            aboutContactList.appendChild(contactNumber);
            
            // Content container
            var contentContainer = document.createElement('div');
            contentContainer.classList.add('content-' + i, 'accordion-content', 'active');
            contentContainer.appendChild(contactName);
            contentContainer.appendChild(aboutContactList);

            allContacts[i].appendChild(contentContainer);
        }
    };

    // Execute addContent so it can be used in changeLinks
    addContent();

    // Listen for click on the document
    document.addEventListener('click', function (event) {
    
        //Bail if our clicked element doesn't have the class
        if (!event.target.classList.contains('accordion-toggle')) return;
        
        // Get the target content
        var content = document.querySelector(event.target.hash);
        if (!content) return;
        
        // Prevent default link behavior
        event.preventDefault();
        
        // If the content is already expanded, collapse it and quit
        if (content.classList.contains('active')) {
            content.classList.remove('active');
            return;
        }
        
        // Get all open accordion content, loop through it, and close it
        var accordions = document.querySelectorAll('.accordion-content.active');
            for (var i = 0; i < accordions.length; i++) {
            accordions[i].classList.remove('active');
        }
        
        // Toggle our content
        content.classList.toggle('active');
    })
}

// Search function
if (document.documentElement.classList && document.documentElement.setAttribute) {

    var input = document.getElementById('search');

    // place 'onkeyup' in the searchbar to prefent errors when this function isn't supported
    input.setAttribute('onkeyup', 'searchFunction()');

    function searchFunction() {
        
        // Declare variables
        var filter, ol, li, span, i;
        filter = input.value.toUpperCase();
        ol = document.getElementById('contacts');
        li = ol.getElementsByClassName('contact');

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            span = li[i].getElementsByTagName('span')[0];
            
            // console.log(span.innerHTML[i]);
            console.log(span.innerHTML);

            if (span.innerHTML.toUpperCase().indexOf(filter) >= 0) {
                li[i].classList.add('show');
                li[i].classList.remove('hide');
            } else {
                li[i].classList.add('hide');
                li[i].classList.remove('show');
            }
        }
    }
};