#!c:\Python27\python.exe

#cgi module of Python 
import cgi
import cgitb 
cgitb.enable()

#access form fields
form = cgi.FieldStorage() 
firstname = form["first"].value 
lastname = form["last"].value

print "Content-Type: text/html;charset=utf-8" 
print
print "Hello,", firstname, "", lastname
print "<br />I just got your name from the form."