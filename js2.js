var str='';var znk='';var list=[];

function renew(){
    //location.reload();
    //window.stop();
    //setTimeout(function(){window.stop();}, 900);
    setTimeout(function(){location.reload();}, 800);
}
window.addEventListener('keydown', function(e) {
    znk=String.fromCharCode(e.keyCode);
    //if (e.keyCode === 67 && (e.metaKey || e.ctrlKey))
    // if (e.keyCode ==13 && i) { my2();}
    if (e.keyCode !=13 ) { str+=znk; //console.log(e.keyCode);
       //document.getElementById('emo').innerHTML='';
       }
    //if (e.keyCode ==13 ) {ajax();}
  });
  //--------------------------------------------------------------------------------------
function ajax(){
    document.getElementById('demo').innerHTML='Wait';
    const Http = new XMLHttpRequest();

    Http.open("POST","http://"+window.location.host, true);
    //Http.open("POST",window.location.hostname, true);
    Http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    console.log("wysłane= "+document.getElementById('kod').value);
    Http.send(document.getElementById('kod').value);

    document.body.innerHTML = document.body.innerHTML+'';
    Http.onreadystatechange=(e)=>{

    }
    //----------------------------------------------------------------------------------------

    //document.body.innerHTML = document.body.innerHTML+ "<h1>Today's date is</h1>";
      setTimeout(function(){document.getElementById('demo').innerHTML='-------------------'}, 1000);
      //setTimeout(function(){location.reload();}, 600);;
      setTimeout(function(){renew();}, 10);}
      //});
