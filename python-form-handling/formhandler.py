#! C:\Python38\python.exe -u

import cgi, cgitb, datetime as dt


def valid_age(age, bday):
    """
    Checks if the age and birthday that was entered is valid
    """
    errs = 0
    cur_date = dt.datetime.today().date()

    # Age and Birthday validation
    if int(age) <= 0 or int(age) > 120:
        errs += 1
        errmsgs.append("    <p>Age should be greater than 0 and less than 121</p>")
    else:
        # Calculates the correct age
        if cur_date.year > int(bday[0:4]):
            if cur_date.month > int(bday[5:7]):
                val_age = cur_date.year - int(bday[0:4])
            elif cur_date.month == int(bday[5:7]):
                if cur_date.day >= int(bday[-2:]):
                    val_age = cur_date.year - int(bday[0:4])
                else:
                    val_age = (cur_date.year - int(bday[0:4])) - 1
            else:
                val_age = (cur_date.year - int(bday[0:4])) - 1
        else:
            val_age = cur_date.year - int(bday[0:4])

        # Checks if age and birthday is valid based on the age that is calculated
        if val_age <= 0 or val_age > 120:
            errs += 1
            errmsgs.append(
                "    <p>Birthday should not lead to age being less than or equal to 0 or greater than 120</p>"
            )
        elif val_age != int(age):
            errs += 1
            msg = (
                "    <p>Age should be "
                + str(val_age)
                + " for the birthday that was entered</p>"
            )
            errmsgs.append(msg)

    return errs


cgitb.enable()  # used for debugging

# Gets all the data that was submitted
form = cgi.FieldStorage()

errctr = 0

# Contains all the error messages
errmsgs = []

# Contains all the content except for error messages
content = []

# Name validation
if "name" in form:
    name = form.getvalue("name")
    msg = "    <p>Name: " + name + "</p>"
    content.append(msg)
    content.append(
        '<script>alert("Use the Developer Tools for this browser to see the cookie that was created!");</script>'
    )
    # MUST be in name=value pairs
    print("Set-Cookie: name=" + name)  # MUST BE PRINTED FIRST!!
else:
    errctr += 1
    errmsgs.append("    <p>Name was not entered</p>")

# Age and Birthday validation
if "age" in form and "bday" in form:
    age = form.getvalue("age")
    bday = form.getvalue("bday")
    errctr += valid_age(age, bday)

    # Checks if the data entered is valid
    if errctr == 0:
        bday_for = dt.date(int(bday[0:4]), int(bday[5:7]), int(bday[-2:])).strftime(
            "%#m/%#d/%Y"
        )
        msgs = "    <p>Age: " + str(age) + "</p>\n<p>Birthday: " + bday_for + "</p>"
        content.append(msgs)
else:
    if "age" not in form:
        errctr += 1
        errmsgs.append("    <p>Age was not entered</p>")
    if "bday" not in form:
        errctr += 1
        errmsgs.append("    <p>Birthday was not entered</p>")


# Ensures that the code that is printed is treated as HTML code
print("Content-Type: text/html\n")

# Prints the HTML code
print("<!DOCTYPE html>")
print('<html lang="en">\n')
print("<head>")
print("    <title>Final Project</title>")
print("</head>\n")
print("<body>")

# Checks if any errors occurred
if errctr == 0:
    # Prints all the content (<p> tags)
    for i in range(len(content)):
        print(content[i])
else:
    print("    <h1>Error</h1>")

    # Prints error messages
    for i in range(errctr):
        print(errmsgs[i])

print('    <a href="form.html">Return</a>')
print("</body>\n")
print("</html>")