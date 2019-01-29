'use strict';
let I;

module.exports = {

    _init() {
        I = require('../custom_steps.js')();
    },

    // insert your locators and methods here

    async checkVersionOfLandingPage() {
        const pageText = await I.grabTextFrom('/html/body');
        if(pageText.includes("iral Academy 2.0: Limited-time Enrollment")){
            I.say("Version 2 page is displayed");
        } else {
            I.say("Version 1 page is displayed");
        }
    },


};