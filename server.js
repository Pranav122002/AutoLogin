const express = require("express");
var webdriver = require("selenium-webdriver");
const mongoose = require("mongoose");

const app = express();

const http = require("http").Server(app);

mongoose
  .connect("mongodb://localhost:27017/autoproject", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("successfull connection");
  })
  .catch((error) => {
    console.log(error);
  });

const path = require("path");
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html.html");
});

var loginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  iusername: {
    type: String,
    required: true,
  },
  fusername: {
    type: String,
    required: true,
  },
  wusername: {
    type: String,
    required: true,
  },
  ausername: {
    type: String,
    required: true,
  },
  nusername: {
    type: String,
    required: true,
  },
  lusername: {
    type: String,
    required: true,
  },
  cusername: {
    type: String,
    required: true,
  },
  rusername: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  ipassword: {
    type: String,
    required: true,
  },
  fpassword: {
    type: String,
    required: true,
  },
  wpassword: {
    type: String,
    required: true,
  },
  apassword: {
    type: String,
    required: true,
  },
  npassword: {
    type: String,
    required: true,
  },
  lpassword: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  rpassword: {
    type: String,
    required: true,
  },
});

const Logindetail = mongoose.model("logindetail", loginSchema);

app.post("/registercredentials", (req, res) => {
  const {
    username,
    iusername,
    fusername,
    wusername,
    nusername,
    ausername,
    cusername,
    lusername,
    rusername,
    password,
    ipassword,
    fpassword,
    wpassword,
    npassword,
    apassword,
    cpassword,
    lpassword,
    rpassword,
  } = req.body;
  var myLogin = new Logindetail({
    username,
    iusername,
    fusername,
    wusername,
    nusername,
    ausername,
    cusername,
    lusername,
    rusername,
    password,
    ipassword,
    fpassword,
    wpassword,
    npassword,
    apassword,
    cpassword,
    lpassword,
    rpassword,
  });
  myLogin
    .save()
    .then(() => {
      res.send("saved!");
    })
    .catch((err) => {
      res.send("errrr");
    });
});
app.get("/logincheck", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});
app.post("/logincheck", (req, res) => {
  const { username, password } = req.body;
  // console.log(username,password);
  if (!username || !password) {
    // return res.send("enter all fields");
    return res.sendFile(__dirname + "/enterallfields.html");
  }
  Logindetail.find({ username: username })
    .then((data) => {
      if (!data) {
        res.sendFile(__dirname + "/invalid.html");
      } else {
        if (data[0].password === password) {
          res.sendFile(__dirname + "/home.html");

          app.get("/instagram", (req, res) => {
            const username = data[0].iusername;
            const password = data[0].ipassword;
            const usernamekey = username;
            const passwordkey = password;
            const driver = new webdriver.Builder()
              .forBrowser("chrome")
              .build();
            driver.manage().window().maximize();
            driver.get("https://www.instagram.com/");

            (async function () {
              await driver.manage().setTimeouts({ implicit: 2000 });

              // username
              driver
                .findElement(
                  webdriver.By.xpath(
                    `//*[@id="loginForm"]/div/div[1]/div/label/input`
                  )
                )
                .sendKeys(usernamekey);

              // password
              driver
                .findElement(
                  webdriver.By.xpath(
                    `//*[@id="loginForm"]/div/div[2]/div/label/input`
                  )
                )
                .sendKeys(passwordkey);

              //login button
              driver
                .findElement(
                  webdriver.By.xpath(
                    `//*[@id="loginForm"]/div/div[3]/button/div`
                  )
                )
                .click();

              //  OTP
            })();
          });


          app.get("/codeforces", (req, res) => {
            const username=data[0].cusername
            const password=data[0].cpassword
            const usernamekey = username
            const passwordkey = password
          
          
            var driver = new webdriver.Builder().forBrowser("chrome").build();
            driver.manage().window().maximize();
            driver.get("https://codeforces.com/enter?back=%2Fregister");
          
            (async function () {
              await driver.manage().setTimeouts({ implicit: 2000 });
          
              // username
              driver.findElement(webdriver.By.id(`handleOrEmail`)).sendKeys(usernamekey);
          
              // password
              driver.findElement(webdriver.By.id(`password`)).sendKeys(passwordkey);
          
              // login button
              driver
                .findElement(
                  webdriver.By.xpath(
                    `//*[@id="enterForm"]/table/tbody/tr[4]/td/div[1]/input`
                  )
                )
                .click();
            })();
          });


          app.get("/netflix", (req, res) => {

            const username = data[0].nusername;
            const password = data[0].npassword;
            const usernamekey = username;
            const passwordkey = password;
          
            var driver = new webdriver.Builder().forBrowser("chrome").build();
            driver.manage().window().maximize();
            driver.get("https://www.netflix.com/in/login");
          
            (async function () {
              await driver.manage().setTimeouts({ implicit: 2000 });
          
              // username
              driver.findElement(webdriver.By.id(`id_userLoginId`)).sendKeys(usernamekey);
          
              // password
              driver.findElement(webdriver.By.id(`id_password`)).sendKeys(passwordkey);
          
              // login button
              driver
                .findElement(
                  webdriver.By.xpath(
                    `//*[@id="appMountPoint"]/div/div[3]/div/div/div[1]/form/button`
                  )
                )
                .click();
            })();
          });
          
          app.get("/amazonprime", (req, res) => {
           const username=data[0].ausername
                  const password=data[0].apassword
                  const usernamekey = username
                  const passwordkey = password
                
                
            var driver = new webdriver.Builder().forBrowser("chrome").build();
            driver.manage().window().maximize();
            driver.get(
              "https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Feu.primevideo.com%2Fauth%2Freturn%2Fref%3Dav_auth_ap%3F_t%3Dsg1zCoRH-juNkg2Ie0TiGQLDi2gKlH_BuNby_ooSg2HvpAAAAAQAAAABi-NKgcmF3AAAAAPgWC9WfHH8iB-olH_E9xQ%26location%3D%2F%3Fref_%253Ddv_web_force_root&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&accountStatusPolicy=P1&openid.assoc_handle=amzn_prime_video_sso_in&openid.mode=checkid_setup&siteState=257-5018018-4776239&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
            );
          
            (async function () {
              await driver.manage().setTimeouts({ implicit: 2000 });
          
              // username
              driver.findElement(webdriver.By.id(`ap_email`)).sendKeys(usernamekey);
          
              // password
              driver.findElement(webdriver.By.id(`ap_password`)).sendKeys(passwordkey);
          
              // sign in button
              driver.findElement(webdriver.By.id(`signInSubmit`)).click();
            })();
          });
          
          
          app.get("/linkedin", (req, res) => {
            const username=data[0].lusername
            const password=data[0].lpassword
            const usernamekey = username
            const passwordkey = password
          
          
            var driver = new webdriver.Builder().forBrowser("chrome").build();
            driver.manage().window().maximize();
            driver.get("https://www.linkedin.com/login");
          
            (async function () {
              await driver.manage().setTimeouts({ implicit: 2000 });
          
              // username
              driver.findElement(webdriver.By.id(`username`)).sendKeys(usernamekey);
          
              // password
              driver.findElement(webdriver.By.id(`password`)).sendKeys(passwordkey);
          
              // login button
              driver
                .findElement(
                  webdriver.By.xpath(`//*[@id="organic-div"]/form/div[3]/button`)
                )
                .click();
            })();
          });
          
          app.get("/reddit", (req, res) => {
            const username=data[0].rusername
            const password=data[0].rpassword
            const usernamekey = username
            const passwordkey = password
          
          
            var driver = new webdriver.Builder().forBrowser("chrome").build();
            driver.manage().window().maximize();
            driver.get(
              "https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2F"
            );
          
            (async function () {
              await driver.manage().setTimeouts({ implicit: 2000 });
          
              // username
              driver
                .findElement(webdriver.By.xpath(`//*[@name="username"]`))
                .sendKeys(usernamekey);
          
              // password
              driver
                .findElement(webdriver.By.xpath(`//*[@name="password"]`))
                .sendKeys(passwordkey);
          
              // login button
              driver
                .findElement(
                  webdriver.By.xpath(
                    `/html/body/div/main/div[1]/div/div[2]/form/fieldset[5]/button`
                  )
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


          app.get("/facebook", (req, res) => {
            const username = data[0].fusername;
            const password = data[0].fpassword;
            const usernamekey = username;
            const passwordkey = password;

            var driver = new webdriver.Builder().forBrowser("chrome").build();
            driver.manage().window().maximize();
            driver.get("https://www.facebook.com/");

            (async function () {
              await driver.manage().setTimeouts({ implicit: 2000 });

              // username
              driver
                .findElement(webdriver.By.id(`email`))
                .sendKeys(usernamekey);

              // password container
              driver.findElement(webdriver.By.id(`passContainer`)).click();

              // password
              driver.findElement(webdriver.By.id(`pass`)).sendKeys(passwordkey);

              // login button
              driver
                .findElement(webdriver.By.xpath(`//*[@name="login"]`))
                .click();
            })();
          });
        } else {
          res.send("invalid details!");
        }
      }
    })
    .catch((err) => {
      res.send(err);
    });
});


http.listen(port, function () {
  console.log(`Server started on http://localhost:${port} ...`);
});
