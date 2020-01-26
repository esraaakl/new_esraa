var delarr=getData("delarr");
var editarr=getData("editarr");


$.ajax({
  url:"https://jsonplaceholder.typicode.com/posts",
  Type:"GET",
  success: function(resp)
  { 
    console.log(resp);  
    create(resp);
  
  },
  error:function(){
    console.log(error)
  }
  })

  function create(resp)
  {
    for (var i=0;i<resp.length;i++)
    {
      var postCard=$("<article>");
      postCard.addClass("post-card")
      $("main").append(postCard);

      var head=$("<h2>");
      head.addClass("head")
       head.text(resp[i].title);
  

     var body=$("<p>");
     body.addClass("body")
     body.text(resp[i].body);
  

    
     var author=$("<h5>");
     author.text("user id: "+resp[i].userId);
     postCard.append(author);

     
     var author=$("<h5>");
     author.text("id: "+resp[i].id);
     postCard.append(author);

    //  btn.attr({"name":resp[i].id})
     postCard.append(head);
     postCard.append(body);

     restoreDel(resp[i].id,postCard);
     restoreEdit(resp[i].id,body,head);
  
    }
  }


  function restoreDel(x,tr)
{
  for(var j=0;j<delarr.length;j++)
{
  console.log("check "+j)
  console.log("resp "+x+"aaaand "+delarr[j])
  if(x==delarr[j])
  {
     tr.remove();
     console.log("founded")
  }
}
}

function restoreEdit(x,body,head)
{
  for(var j=0;j<editarr.length;j++)
  {
    // console.log("resp "+x+"aaaand "+editarr[j].id)
    if(x==editarr[j].id)
    {

      head.text(editarr[j].title);
      body.text(editarr[j].body);
       
       console.log("founded")
    }
  }
}

  // ...........................//
    // ..........................//
    function setData(key,value)
    {
      sessionStorage.setItem(key,JSON.stringify(value))
    }
    
    function getData (key)
    {
      if(!JSON.parse(sessionStorage.getItem(key))){
        return []
      }
      else{
    
        return  JSON.parse(sessionStorage.getItem(key))
      }
    }


    ////////bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb///
    var email_ex  =/^[a-z]{1}\w{0,}@{1}\w{1,}\.[a-z]{3}$/i
var pass_ex   =/^(?=.*[a-z])(?=.*[@$!%*?&])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{4,}$/
var check1;
var check2;



var form      =document.getElementById("form")
var email     =form.email;
var pass      =form.password;
var loginBtn  =document.getElementById("submit")
var span_pass =document.getElementById("pass_span")
var span_mail =document.getElementById("mail_span")


console.log($)
email.addEventListener("keyup",mailHandler);
pass.addEventListener("keyup",passHandler);
form.addEventListener("submit",handler);


function handler (e)
{
  // e.preventDefault();
  passHandler ();
  mailHandler();
  if (check1==1 && check2==1)
  {
    // location.replace("./mange.html");
    form.setAttribute("action",'./mange.html')
    console.log("yes")
  }
  else{
     e.preventDefault();
  }

}

function mailHandler()
{
  if (email.value.length)
  {
  var answer2=email_ex.test(email.value)
  if (answer2)
  {
    console.log(" email is allowed")
    check2=1;
    span_mail.innerText="";
   loginBtn.disabled=false;
  }
  else{
    console.log(" emmail is Error")
    console.log(span_mail)
    check2=0;
    span_mail.innerText="*invalid mail";
    console.log("................ emmail is Error")
    loginBtn.disabled=true;
  }
}
else
{
  console.log(" emmail is empty")
  check2=0;
  span_mail.innerText="*email is required";
  loginBtn.disabled=true;
} 
}

function passHandler ()
 {  
  var answer3=pass_ex.test(form.password.value)
  if (pass.value.length>0)
  {
  
  if (answer3 && form.password.value.length>=6 && form.password.value.length<13) 
  {
    console.log(" pass is allowed")
    check1=1;
    span_pass.innerText="";
    loginBtn.disabled=false;
  }
  else {
    loginBtn.disabled=true;
    span_pass.innerText="invalid pass"
    console.log(" pass is Error")
    check1=0;
  }
}

 else
 {
  console.log(" pass is empty")
  check1=0;
  span_pass.innerText="*password is required";
  loginBtn.disabled=true;

 }
}
pppppppppppppppppppppppppppppppppppppppppppppppppppppppp
var delarr=getData("delarr");
var editarr=getData("editarr");

$("#reset").on("click",function(){
  console.log("clicked")
  setData("delarr",[]);
  setData("editarr",[]);
  location.replace("./mange.html");
})

var table=$("table");
$.ajax({
  url:"https://jsonplaceholder.typicode.com/posts",
  Type:"GET",
  success: function(resp)
  { 
    console.log(resp);  
    create(resp)
  
  
  },
  error:function(){
    console.log(error)
  }
  })


function create(resp)
{
  for (var i=0;i<resp.length;i++)
  {
    var tr=$("<tr>");
    tr.addClass("row"+resp[i].id)
    table.append(tr);

    var td1=$("<td>");
    td1.addClass("td1")
    td1.text(resp[i].title);
    td1.css({"width":"20%"});

   var td2=$("<td>");
   td2.addClass("td2");
   td2.css({"width":"50%"});
   td2.text(resp[i].body);
   tr.append(td1);
   tr.append(td2);

   var delBtn=$("<button>");
   delBtn.text("Delete");
   delBtn.attr({"name":resp[i].id})
   delBtn.addClass("delBtn");
   tr.append(delBtn);

   var editBtn=$("<button>");
   editBtn.text("Edit");
   editBtn.attr({"name":resp[i].id})
   editBtn.addClass("editBtn");
   tr.append(editBtn);
   
   restoreDel(resp[i].id,tr);
   restoreEdit(resp[i].id,td2,td1);

  }
}
  
function restoreDel(x,tr)
{
  for(var j=0;j<delarr.length;j++)
{
  console.log("check "+j)
  console.log("resp "+x+"aaaand "+delarr[j])
  if(x==delarr[j])
  {
     tr.remove();
     console.log("founded")
  }
}
}

function restoreEdit(x,body,head)
{
  for(var j=0;j<editarr.length;j++)
  {
    // console.log("resp "+x+"aaaand "+editarr[j].id)
    if(x==editarr[j].id)
    {

      head.text(editarr[j].title);
      body.text(editarr[j].body);
       
       console.log("founded")
    }
  }
}


  $(document).on("click",".delBtn",function()
  {
    var confirme=confirm("Are you sure you want to delete this post?")
    if(confirme)
    {
      var id =$(this).attr("name");
      delarr.push(id);
      setData("delarr",delarr);
      var btn=$(this);
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/"+id,
        Type:"DELETE",
        success:function(resp)
        {
          console.log("sucess")
          console.log(resp);
         btn.parent().remove();
        },
        error: function()
        {
          console.log("error");
        }

      });
       
    }
  });
  
  $(document).on("click",".editBtn", editHandler);
  function  editHandler()
  {
    var id =$(this).attr("name");
      var btn=$(this);
    console.log(this);
    setData("id",id);
    location.replace("./editPage.html");


  }










  // ..........................//
  function setData(key,value)
{
  sessionStorage.setItem(key,JSON.stringify(value))
}

function getData (key)
{
  if(!JSON.parse(sessionStorage.getItem(key))){
    return []
  }
  else{

    return  JSON.parse(sessionStorage.getItem(key))
  }
}

pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp

var editarr=getData("editarr");

var id=getData("id");
var postTitle=$("#postTitle");
var postBody=$("#postBody");
var submit=$("#submit");
var user;
var editObg;
$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts/"+id,
  Type:"GET",
  success:function(resp)
  {
    console.log("sucess getting")
    console.log(id)
    console.log(resp);
    //check if it has been edited before
    var check=checkIfWasEdited();
    //no
    if(check==false)
    {postTitle.val(resp.title);
    postBody.val(resp.body);
     user=resp.userId;}
      //yes
     else {
      postTitle.val(editObg.title);
      postBody.val(editObg.body);
       user=resp.userId
     }
    
  },
  error: function()
  {
    console.log("error");
  }

});

function checkIfWasEdited()
{
  for (var i=0;i<editarr.length;i++)
  {
    if(id===editarr[i].id)
     {editObg=editarr[i];
       return true}
  }
  return false
}


postTitle.on("keyup",titleHandler)
postBody.on("keyup",titleHandler)

function titleHandler()
{ var this_=this;
  console.log(this)
  if(this_.value.length==0)
  {
    this_.style.border="1px red solid"
    submit.attr({"disabled":"true"});
  }
  else
  {
    this_.style.border="none"
    submit.prop("disabled", false);
  }
}



submit.on("click",submitEditHandler);

function submitEditHandler(e)
{
  e.preventDefault();
  if(postBody.val().length>0 && postTitle.val().length>0)
  {
    // alert("yaaaaaaaaaay")
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/"+id,
      data:{ "userId": user,
      "id": id ,
      "title": postTitle.val(),
      "body":  postBody.val()},
      Type:"PUT",
      success:function(resp)
      {
        console.log("sucess")
        console.log(resp);

        var obj={
          "userId": user,
      "id": id ,
      "title": postTitle.val(),
      "body":  postBody.val()}

      editarr.push(obj);
      setData("editarr",editarr);

      alert("hello from success ");
      location.replace("./mange.html");
      },
      error: function()
      {
        console.log("error");
      }

    });
    console.log("hello after ajax")
  }
  else
  {
    alert("empty");
  }
}





// ............................//
function setData(key,value)
{
  sessionStorage.setItem(key,JSON.stringify(value))
}

function getData (key)
{
  if(!JSON.parse(sessionStorage.getItem(key))){
    return []
  }
  else{

    return  JSON.parse(sessionStorage.getItem(key))
  }
}


