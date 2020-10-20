#!c:\Python27\python.exe

print "Content-Type: text/html;charset=utf-8"
print
print "<!DOCTYPE html>"
print """
<html>
<head>
<title>Form Example</title>
<style>
label {
color: #B4886B; 
fontweight: bold; 
display: block; 
width: 150px;
float: left;
}
</style>
</head>
<body> <h1>Enter your name</h1>
<form ACTION='hellopyfromform.cgi' METHOD='GET'>
<label >first name</label><INPUT TYPE='text' name='first' id='name' /><br />
<label >last name</label><INPUT TYPE='text' name='last' id='name' /><br />
<INPUT TYPE='submit'>
</form>
</body>
</html>
"""