// Global gitnore toevoegen

// Create local scope d.m.v. een 'immediate invoked function expression'
(function(){
    "use strict"

    // Global object waar alle projecten in een array worden gestopt
    var dataArrayBus = {}

    // Initialize application
    var app = {
        // Method - key: valuet
        init:function (){
            // Initialiseren van functie, vervolgens de data er in stoppen
            api.init().then(
                function(data) {
                    console.log('data is resolved, toch:');
                    routes.init(data); 
                }
            )
        },
        
        // Property
        rootElement: document.body
    }

    // Api
    var api = {
        init: function(){
            return fetchData();
        }
    }

function fetchData (cardId) {
    var loadData = new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        var url = 'https://behance.net/v2/projects'
        var key = '2MiJLq0Qd77dZhFOez4qKbIoGJfT4KSh'
        // Access-Control-Allow-Origin: *,
        var requestType;

        if (typeof cardId == 'undefined') {
            request.open('GET', url + '?api_key=' + key, true);
        } else {
            request.open('GET', url+'/'+ cardId + '?api_key=' + key, true);
        }

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                resolve(data);
            } else {
                reject(error);
            }
        }

        request.onerror = function() {
            alert('There was a connection error of some sort');
        };
        
        request.send();
        // Alternatief om de data op de halen en meteen iets mee te doen
        // allProjects: function(data) 
        // },
    })
    return loadData
}

    // Handle routes & state
	var routes = {
		init: function(data){
            // request.getData();
            console.log("herro")
            dataArrayBus = data;

            var route = window.location.hash

            if (route === ''){
                window.location.hash = '#uiux'
            }

			// De eerste sectie selecteren voor de eerste keer laden van de pagina
            // window.addEventListener("hashchange", function(event){
            //     var sectionOne = app.rootElement.querySelector('section:first-of-type')
			// })
            
            routie ({
                'uiux': function() {
                    var route = location.hash
                    template.toggle(route)
                    template.render()
                    // Data hier inladen die HIERVOOR al gefilterd moet zijn.

                    // Data kunnen inlezen
                    // Vervolgens filteren op projecten die UIUX bevatten
                },

                'uiux/:id': function(id) {
                    console.log('dit is de id:'+id);
                    var cardData = fetchData(id);

                    cardData.then(function(data) {
                    
                        console.log('dataaaaa card:');
                        console.log(data);
                    }, function(reason) {
                        // rejection
                        alert('Error: '+reason);
                    });

                    

                    // var objectData = template.render().projects

                    // objectData.forEach(function)

                    // targetElement.insertAdjacentElement(position, element);
                },

                'webdesign': function(data) {
                    var route = location.hash
                    template.toggle(route)
                    
                    // Data kunnen inlezen
                    // Vervolgens filteren op projecten die Webdesign bevatten
                },

                // 'webdesign/:details': function(details) {
                //     var route = location.hash
                //     targetElement.insertAdjacentElement(position, element);
                // },

                'graphicdesign': function(data) {
                    var route = location.hash
                    template.toggle(route)

                    // Data kunnen inlezen
                    // Vervolgens filteren op projecten die Graphic Design bevatten
                },

                // 'graphicdesign/:details': function(details) {
                //     console.log(details)
                //     var route = location.hash
                //     targetElement.insertAdjacentElement(position, element);
                // },
            });
		}
    }

    // Render / toggle sections
    var template = {
        render: function(){
            // API data binnen een object plaatsen
            var projects = dataArrayBus.projects;
        
            // API data koppelen en meegeven aan het ID
            Transparency.render(document.getElementById('projects'), projects)

            // Selecteren van alle elementen met de class .cover
            var projectCovers = document.querySelectorAll('.cover');
            // Voeg voor elk element met de class .cover de image toe die bij de juiste index hoort 
            // Met directives
            projectCovers.forEach(function(element, index){
                element.setAttribute("src", projects[index].covers['404']);
                console.log(projects[index].covers.original)
            })

            var detailLink = document.querySelectorAll('.link');
            detailLink.forEach(function(element, index){
                element.setAttribute("href", location.hash + '/' + projects[index].id);
            })
            // Aanpassing voor later: Data en image per element renderen ipv eerst alle elementen te renderen en vervolgens alle afbeeldingen.
        },
        renderCard: function(data){
            console.log('ik ga een card renderen met de data:');
            console.log(data);
            document.getElementById('projects').innerHTML = JSON.stringify(data);
        },
        // detailRender: function(data) {
            // var obj = {
            //     'foo': 1,
            //     'bar': 2
            // };
             
            // for (var key in obj) {
            //     console.log(obj[key]);
            // }  
        // },

		hide: function(){
			var template = document.querySelectorAll('section')
			// Voor elk element in sections verwijder 'active' uit class
			template.forEach(function(element) {
				element.classList.remove('active')
			})
		},

		show: function (route){
			// show active section (hash /route)
			document.querySelector(route).classList.add('active')
		},

		toggle: function(route){
			// hide all sections
			this.hide()
			// hide all sections
			this.show(route)
		}
    }

    // Start de application 
    app.init();
})()