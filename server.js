const express = require("express");
var webdriver = require("selenium-webdriver");

const app = express();

const http = require("http").Server(app);

const path = require("path");
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html.html");
});

app.get("/instagram", (req, res) => {


  var usernamekey = "Pranavpatil122002@gmail.com"
  var passwordkey = "Pranavpatil122002@gmail.com"



  var driver = new webdriver.Builder().forBrowser("chrome").build();
  driver.manage().window().maximize();
  driver.get("https://www.instagram.com/");

  (async function () {
    await driver.manage().setTimeouts({ implicit: 2000 });

    // username
    driver
      .findElement(
        webdriver.By.xpath(`//*[@id="loginForm"]/div/div[1]/div/label/input`)
      )
      .sendKeys(usernamekey);

    // password
    driver
      .findElement(
        webdriver.By.xpath(`//*[@id="loginForm"]/div/div[2]/div/label/input`)
      )
      .sendKeys(passwordkey);

    //login button
    driver
      .findElement(
        webdriver.By.xpath(`//*[@id="loginForm"]/div/div[3]/button/div`)
      )
      .click();

    //  OTP
    
  })();
});




app.get("/facebook", (req, res) => {

  var usernamekey = "Pranavpatil122002@gmail.com"
  var passwordkey = "Pranavpatil122002@gmail.com"




  var driver = new webdriver.Builder().forBrowser("chrome").build();
  driver.manage().window().maximize();
  driver.get("https://www.facebook.com/");

  (async function () {
    await driver.manage().setTimeouts({ implicit: 2000 });

    // username
    driver
      .findElement(
        webdriver.By.id(`email`)
      )
      .sendKeys(usernamekey);

    // password container
    driver
      .findElement(
        webdriver.By.id(`passContainer`)
      )
      .click();

    // password
    driver
      .findElement(
        webdriver.By.id(`pass`)
      )
      .sendKeys(passwordkey);

     // login button
    driver
      .findElement(
        webdriver.By.xpath(`//*[@name="login"]`)
      )
      .click();
  })();
});

app.get("/netflix", (req, res) => {

  var usernamekey = "Pranavpatil122002@gmail.com"
  var passwordkey = "Paaefra"




  var driver = new webdriver.Builder().forBrowser("chrome").build();
  driver.manage().window().maximize();
  driver.get("https://www.netflix.com/in/login");

  (async function () {
    await driver.manage().setTimeouts({ implicit: 2000 });

    // username
    driver
      .findElement(
        webdriver.By.id(`id_userLoginId`)
      )
      .sendKeys(usernamekey);

 
    // password
    driver
      .findElement(
        webdriver.By.id(`id_password`)
      )
      .sendKeys(passwordkey);

     // login button
    driver
      .findElement(
        webdriver.By.xpath(`//*[@id="appMountPoint"]/div/div[3]/div/div/div[1]/form/button`)
      )
      .click();
  })();
});


app.get("/amazonprime", (req, res) => {

  var usernamekey = "Pranavpatil122002@gmail.com"
  var passwordkey = "Paaefra"




  var driver = new webdriver.Builder().forBrowser("chrome").build();
  driver.manage().window().maximize();
  driver.get("https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Feu.primevideo.com%2Fauth%2Freturn%2Fref%3Dav_auth_ap%3F_t%3Dsg1zCoRH-juNkg2Ie0TiGQLDi2gKlH_BuNby_ooSg2HvpAAAAAQAAAABi-NKgcmF3AAAAAPgWC9WfHH8iB-olH_E9xQ%26location%3D%2F%3Fref_%253Ddv_web_force_root&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&accountStatusPolicy=P1&openid.assoc_handle=amzn_prime_video_sso_in&openid.mode=checkid_setup&siteState=257-5018018-4776239&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0");

  (async function () {
    await driver.manage().setTimeouts({ implicit: 2000 });

    // username
    driver
      .findElement(
        webdriver.By.id(`ap_email`)
      )
      .sendKeys(usernamekey);

 
    // password
    driver
      .findElement(
        webdriver.By.id(`ap_password`)
      )
      .sendKeys(passwordkey);

     // sign in button
    driver
      .findElement(
        webdriver.By.id(`signInSubmit`)
      )
      .click();
  })();
});



app.get("/codeforces", (req, res) => {

  var usernamekey = "Pranavpatil122002@gmail.com"
  var passwordkey = "Paaefra"




  var driver = new webdriver.Builder().forBrowser("chrome").build();
  driver.manage().window().maximize();
  driver.get("https://codeforces.com/enter?back=%2Fregister");

  (async function () {
    await driver.manage().setTimeouts({ implicit: 2000 });

    // username
    driver
      .findElement(
        webdriver.By.id(`handleOrEmail`)
      )
      .sendKeys(usernamekey);

 
    // password
    driver
      .findElement(
        webdriver.By.id(`password`)
      )
      .sendKeys(passwordkey);

     // login button
    driver
      .findElement(
        webdriver.By.xpath(`//*[@id="enterForm"]/table/tbody/tr[4]/td/div[1]/input`)
      )
      .click();
  })();
});



app.get("/linkedin", (req, res) => {

  var usernamekey = "Pranavpatil122002@gmail.com"
  var passwordkey = "Paaefra"




  var driver = new webdriver.Builder().forBrowser("chrome").build();
  driver.manage().window().maximize();
  driver.get("https://www.linkedin.com/login");

  (async function () {
    await driver.manage().setTimeouts({ implicit: 2000 });

    // username
    driver
      .findElement(
        webdriver.By.id(`username`)
      )
      .sendKeys(usernamekey);

 
    // password
    driver
      .findElement(
        webdriver.By.id(`password`)
      )
      .sendKeys(passwordkey);

     // login button
    driver
      .findElement(
        webdriver.By.xpath(`//*[@id="organic-div"]/form/div[3]/button`)
      )
      .click();
  })();
});



app.get("/reddit", (req, res) => {

  var usernamekey = "Pranav"
  var passwordkey = "Pranavpa123"




  var driver = new webdriver.Builder().forBrowser("chrome").build();
  driver.manage().window().maximize();
  driver.get("https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2F");

  (async function () {
    await driver.manage().setTimeouts({ implicit: 2000 });

    // username
    driver
      .findElement(
        webdriver.By.xpath(`//*[@name="username"]`)
        
      )
      .sendKeys(usernamekey);

 
    // password
    driver
      .findElement(
        webdriver.By.xpath(`//*[@name="password"]`)
      )
      .sendKeys(passwordkey);

     // login button
    driver
      .findElement(
        webdriver.By.xpath(`/html/body/div/main/div[1]/div/div[2]/form/fieldset[5]/button`)
      )
      .click();

     
  })();
});


app.get("/whatsapp", (req, res) => {



  var driver = new webdriver.Builder().forBrowser("chrome").build();
  driver.manage().window().maximize();
  driver.get("https://web.whatsapp.com/");

  (async function () {
    await driver.manage().setTimeouts({ implicit: 2000 });


  })();
});



http.listen(port, function () {
  console.log(`Server started on http://localhost:${port} ...`);
});
