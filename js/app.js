
/* ======= Model ======= */

var model = {
    currentLego: null,
    legos: [
        {
            clickCount : 0,
            name : 'Grand Carousel',
            imgSrc : 'img/Creator-Carousel-10196-2.jpg',
            imgAttribution : 'https://www.lego.com'
        },
        {
            clickCount : 0,
            name : 'Cargo Train',
            imgSrc : 'img/7939.png',
            imgAttribution : 'https://www.lego.com'
        },
        {
            clickCount : 0,
            name : "Santa's Workshop",
            imgSrc : 'img/LEGO-2014-Winter-Village-Santas-Workshop-10245-Set-e1408126000342.jpg',
            imgAttribution : 'https://www.lego.com'
        },
        {
            clickCount : 0,
            name : 'Grand Emporium',
            imgSrc : 'img/10211.png',
            imgAttribution : 'https://www.lego.com'
        },
        {
            clickCount : 0,
            name : 'MINI Cooper',
            imgSrc : 'img/q3i6vycvluxercnyv5sy.jpg',
            imgAttribution : 'https://www.lego.com'
        },
        {
            clickCount : 0,
            name : 'Town Hall',
            imgSrc : 'img/10224_Back_01.jpg',
            imgAttribution : 'https://www.lego.com'
        }
    ]
};

/* ======= Control ======= */

var control = {

    init: function() {
        model.currentLego = model.legos[0];
        legoListView.init();
        legoImageView.init();
    },

    getLegoAll: function() {
        return model.legos;
    },

    setCurrentLego: function(lego) {
        model.currentLego = lego;
    },

    getCurrentLego: function() {
        return model.currentLego;
    },

    increaseClick: function() {
        model.currentLego.clickCount++;
        legoImageView.render();
    }
};



/* ======= View ======= */

var legoListView = {

    init: function() {
        // this.legoListElem = $('#lego-list');
        this.render();
    },

    render: function() {
        var addHTML = ''
        var legos = control.getLegoAll();

        for (i=0; i<legos.length; i++) {
            elem = document.createElement('li');
            elem.textContent = legos[i].name;


            // on click, setCurrentCat and render the legoView
            // (this uses the closure-in-a-loop trick to connect the value
            //  of the lego variable to the click event function)
            var clickfunction = function(lego) {
                return function() {
                    control.setCurrentLego(lego);
                    legoImageView.render();
                };
            }

            elem.addEventListener('click', clickfunction(legos[i]));


           $('#lego-list').append(elem);
        }
    }
};

var legoImageView = {

    init: function() {
        // this.legoElem = $('#lego');
        // this.legoNameElem = $('#lego-name');
        // this.legoImageElem = $('#lego-img');
        // this.countElem = $('#lego-count');

        $('#lego-img').bind('click', function() {
            control.increaseClick();
        });

        this.render();
    },

    render: function() {
        var currentLego = control.getCurrentLego();
        $('#lego-count').html(currentLego.clickCount);
        $('#lego-name').html(currentLego.name);
        $('#lego-img').attr("src",currentLego.imgSrc);
    }

};


control.init();
