Feature('Register');

const uniqueString = require('unique-string');

Before(async (I, landingPage) => { 
    await I.amOnPage('https://jumpcut.com/enroll/hdvvxks');
    await landingPage.checkVersionOfLandingPage();
    await I.wait(5);
});

Scenario('Verify that the Full Name field is required', async(I, registerPage) => {
    await registerPage.registerUser("", "Test12354@test.com", "Test124", "Testing");
    await I.see("This field is required");
});

Scenario('Verify that the Email field is required', async(I, registerPage) => {
    await registerPage.registerUser("Tim test", "", "Test124", "Testing");
    await I.see("This field is required");
});

Scenario('Verify that the Username field is required', async(I, registerPage) => {
    await registerPage.registerUser("Tim test", "Test12354@test.com", "", "Testing");
    await I.see("This field is required");
});

Scenario('Verify that the Password field is required', async (I, registerPage) => {
    await registerPage.registerUser("Tim test", "Test12354@test.com", "Test124", "");
    await I.see("Password should be atleast 6 characters long");
});

Scenario('Verify that valid email is required', async(I, registerPage) => {
    await registerPage.registerUser("Tim test", "Test123test.com", "test124", "Testing");
    await I.see("Please enter a valid email address");
});

Scenario('Verify that password should be atleast 6 characters long', async(I, registerPage) => {
    await registerPage.registerUser("Tim test", "Test12354@test.com", "test124", "abcd5");
    await I.see("Password should be atleast 6 characters long");
});

Scenario('Verify that when all the required fields entered a new user can be created', async(I, registerPage) => {
    const random = uniqueString();
    const email = "Test_" + random + "@test.com";
    console.log("email : " + email);
    await registerPage.registerUser("Tim test", email, "test_"+random, "Testing");
    await I.see("Congratulations!");
});