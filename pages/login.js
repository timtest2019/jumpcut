'use strict';
let I;

module.exports = {

    _init() {
        I = require('../custom_steps.js')();
    },

    // insert your locators and methods here
    link_login: {
        id: 'login'
    },
    locators_login: {
        input_email: {
            id: 'email'
        },
        input_password: {
            id: 'password'
        },
        button_login: {
            xpath: './/button[@type="submit" and text()="Login"]'
        }
    },
    msg_validation: {
        class: 'validationErrorMsg'
    },

    async openLogin() {
        await I.click(this.link_login);
    },

    async login(email, password) {
        await I.fillField(this.locators_login.input_email, email);
        await I.fillField(this.locators_login.input_password, password);
        await I.click(this.locators_login.button_login);
        await I.wait(5);
    },


};