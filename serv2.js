var files = null;
var whole = 'help';
var wynik = '';
var html = '';
var http = require('http');
var   fs = require('fs');
var fs1='',htm1='';
console.log(process.argv[1]);
var pathLen=process.argv[1].length;
var path=process.argv[1].substring(0,pathLen-8);
console.log(path);
fs.readFile(path+'js2.js', 'utf8', function(err, contents) {
    js1=contents;
    //console.log(contents);
});
fs.readFile(path+'html2.html', 'utf8', function(err, contents) {
    htm1=contents;
    //console.log(contents);
});
var srvr = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.write('<!DOCTYPE html><html><body>');
  res.write('<script>'+js1+'</script>');
  res.write(htm1+wynik);
  res.write('</body></html>');
  res.end();                              //ważny

  if (req.method === 'POST') {

     req.on('data', (chunk) => {
         whole = chunk.toString()
     })

     req.on('end', () => {
         //console.log("kod="+whole);
         console.log(whole);
         //print(whole);
         const {exec} = require('child_process');
         exec(whole,{'encoding': 'UTF-8'}, (err, stdout, stderr) => {
           if (err) {
             console.error(err);
             //var res = err.replace(/\n/g, "<br>");
             wynik='<p>'+whole+'<br>'+err+'</p>';
             return;
           }
           console.log(stdout);
           var res = stdout.replace(/\n/g, "<br>");
           wynik='<p>'+res+'</p>';
           //console.log(wynik.length);
           //console.log('?'+String.fromCharCode(13));
         });

         res.end();
     })
   }

 });
srvr.listen(7000);
console.log("start at 7000");
