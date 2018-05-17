
    function userSelector(text1){
        name = text1.match(/"\w+\s*\w*\s*\w*\w/g);
    names = [];

        name.forEach(function(element) {
            element=element.replace("\"", "");
            names.push(element);
        });

            console.log(names);
    }
let info = `During today's presentation "Valentine Oragbakosi" presented first followed by "Nwosu Ifeoma Lucia" and then "Ibe Agwu" after which "Chinonso Williams Junior", "Ndife Uchenna", "Ehiogu Chika Josephine" and finally "Chidera Jennifer". "Ebuka " will be presenting tomorrow.`;
    userSelector(info);

