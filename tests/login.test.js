Feature('Login');

Before(async(I, landingPage, loginPage) => { 
    await I.amOnPage('https://jumpcut.com/enroll/hdvvxks');
    await I.wait(5);
    await landingPage.checkVersionOfLandingPage();
    await loginPage.openLogin();
});

Scenario('Verify that a user cannot log in without a valid password', async(I, loginPage) => {
    await loginPage.login("dddddd", "test123");
    await I.see("Bad username/password. Please try again.");
});

Scenario('Verify that a user cannot log in without a valid username', async(I, loginPage) => {
    await loginPage.login("test123", "dddddd");
    await I.see("Bad username/password. Please try again.");
});

Scenario('Verify that a user cannot log in without a valid username and password', async(I, loginPage) => {
    await loginPage.login("zest123", "zest123");
    await I.see("Bad username/password. Please try again.");
});

// Scenario('Verify that a user cannot log in with empty username and password fields', async(I, loginPage) => {
//     await loginPage.login("", "");
//     await I.see("Please fill out this field.");
// });

Scenario('Verify that the user can log in with out issue', async(I, loginPage) => {
    await loginPage.login("Test123", "test123");
    await I.see("Congratulations!");
});
