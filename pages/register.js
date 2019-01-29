'use strict';
let I;

module.exports = {

    _init() {
        I = require('../custom_steps.js')();
    },

    // insert your locators and methods here

    block_signup: {
        id: 'signup-block'
    },

    logo_jumpcut: {
        xpath: '//a[@class="logo"]'
    },
    locators_regsiter: {
        input_fullName: {
            id: 'n_name'
        },
        input_email: {
            id: 'n_email'
        },
        input_username: {
            id: 'n_username'
        },
        input_password: {
            id: 'n_password'
        },
        button_login: {
            xpath: '//button[text()="CREATE YOUR ACCOUNT"]'
        }
    },
    
    async registerUser(fullname, email, username, password) {
        await I.waitForVisible(this.block_signup, 20);
        console.log("email : " + email);
        await I.fillField(this.locators_regsiter.input_fullName, fullname);
        console.log("email : " + email);
        await I.fillField(this.locators_regsiter.input_email, email);
        console.log("username : " + username);
        await I.fillField(this.locators_regsiter.input_username, username);
        console.log("password : " + password);
        await I.fillField(this.locators_regsiter.input_password, password);
        await I.click(this.locators_regsiter.button_login);
        await I.wait(20);
    },

};