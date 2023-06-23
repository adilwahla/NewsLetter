const express = require('express');
const bodyParser = require('body-parser');
const request=require("request");
const https=require("https");
const app = express();
app.use(express.static("public")); // to use static files like css on server 
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// post request

app.post("/", function (req, res) {
    const fName=req.body.Fname;
    const lName=req.body.Lname;
    const email=req.body.email;
    var data={
    members:[
        {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: fName,
                LNAME: lName
            
            }
        }
    ]
};

const jsonData=JSON.stringify(data);
 const url="https://us9.api.mailchimp.com/3.0/lists/9c902ff572"
//https://${dc}.api.mailchimp.com/3.0/lists/{list_id}
const options ={
    method:"POST",
    auth: "adil1:2964b2dd64e9dfe63c0a4ca1b45cd473-us9",

};
const request=https.request(url,options,function (response) {
    response.on("data",function (data) {
        if (response.statusCode === 200) {
            // Success - Redirect to success page
           res.sendFile(__dirname+'/success.html');
            // Perform the necessary logic to redirect to the success page
          } else {
            // Failure - Redirect to failure page
            res.sendFile(__dirname+'/failure.html');
            // Perform the necessary logic to redirect to the failure page
          }
      console.log(JSON.parse(data));
    })
});

 request.write(jsonData);
 request.end();
});
// const apiKey="2964b2dd64e9dfe63c0a4ca1b45cd473-us9";
// const audienceID="9c902ff572";

// Routes
app.post("/failure",function(req,res){
    res.redirect("/");
});
app.post("/success",function(req,res){
    res.redirect("/");
});
app.get('/', (req, res) => {

res.sendFile(__dirname+'/signup.html');
});

// Start the server
app.listen(process.env.PORT||3000, () => {
  console.log('Server is running on port 3000');
});
