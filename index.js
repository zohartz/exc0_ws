'use strict';

var EventEmitter = require('events');
var eventsConfig = require('./hotelrating/config');

var Hotel = require('./hotelrating');
var hotel = new Hotel();


hotel.on(eventsConfig.Rate, function() {
    console.log("Hotel Name:"+ hotel.hotelName);
    console.log("Hotel's rating is " + hotel.hotelRating);
    if(hotel.hotelRating<0) {
    console.log("The hotel's rating is less than 0 :(");
    }
});

hotel.incrementRating();
hotel.incrementRating();
hotel.incrementRating();
hotel.decrementRating();
hotel.decrementRating();


