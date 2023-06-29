var exp = require('express')
var body = require('body-parser')


var app = exp()



app.get('/empform',function(req,res){
    res.sendFile(__dirname+"/form.html")
})


app.get("/getDataTable",function(req,res){
  var email = req.body.emailid;
  var name1 = req.body.name;
  var dob1 = req.body.dob;
  var qual = req.body.qualification;

  var str=" ";

res.write("<div>")
res.write("<h1>Email:  </h1>"+email)
res.write("<h1>Name:  </h1>"+email)
res.write("<h1>Date of Birth:  </h1>"+email)
res.write("<h1>Qualification:  </h1>"+email)
res.write("</div>")

  res.end;
});

app.listen(9000,function(){
    console.log("Server started at 9000")
})