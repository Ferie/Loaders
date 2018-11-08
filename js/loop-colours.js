var colours = [
    {
        sectionColours: {
            colour: "white"
        },
        spinnerColours: {
            colour: "blue"
        }
    },
    {
        sectionColours: {
            colour: "blue"
        },
        spinnerColours: {
            colour: "white"
        }
    },
    {
        sectionColours: {
            colour: "black"
        },
        spinnerColours: {
            colour: "red"
        }
    },
    {
        sectionColours: {
            colour: "red"
        },
        spinnerColours: {
            colour: "black"
        }
    },
    {
        sectionColours: {
            colour: "orange"
        },
        spinnerColours: {
            colour: "yellow"
        }
    },
    {
        sectionColours: {
            colour: "yellow"
        },
        spinnerColours: {
            colour: "orange"
        }
    },
    {
        sectionColours: {
            colour: "purple"
        },
        spinnerColours: {
            colour: "green"
        }
    },
    {
        sectionColours: {
            colour: "green"
        },
        spinnerColours: {
            colour: "purple"
        }
    }
];

/* Render the template */
var rendered = Mustache.render(document.getElementById('loaders-template').innerHTML, {
    colours: colours
});

/* Append the rendered template to the HTML */
document.getElementById('loaders').innerHTML = rendered;
