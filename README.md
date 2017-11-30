# Saas for Mess Contractors

## Synopsis

This project is a management software for Mess Contractors where the students could inform the Contractor about their Availablity status for future meals. It helps the Contractor to save wastage on extra food and also bills the students for the particular meals that they consumed during the course of a month. Only those students who are sure about their unavailablity for the next meal can change their status for next meal to  Unavailable(Atleast 4 hrs prior to the meal). By default the status would be Available. Entry in mess would only be guaranteed by the successfully scanning the BarCode for that meal.

## Motivation

Every month 180 kg of food was wasted in Hostel J's mess in the year 2016-17. This was mainly because the Contractor had no idea about the number of students coming for the next meal and thus to avoid shortage he cooked expecting all of them. Since all of us are Hostel Residents from the beginning of the College, we were also billed in excess for the meals that we didn't ate.

## Installation

#Step 1
<ul>
<li>Install Mysql from MAMP, LAMP or XAMPP. </li><li>Create a new database named messotopia.</li><li>Import the 'db.sql' file from the repo to PHP MyAdmin.</li>
<li>Keep the mysql running.</li>
</ul>    
    </br>
#Step 2
<h4>Install NodeJS and npm.</h4> <br/>
    <ul>
   <li> 0. Open folder in terminal.</li>
    <li>1. <code>cd api</code></li>
    <li>2. <code>npm install</code></li>
   <li> 3. Open components/dbconnection.js and change the mysql credentials according to your machine(username,password,database name, host)</li>
    <li>4. npm start</li>
    </ul>
This will start the server.<br/>
#Step 3
<h4>Install ReactJS.</h4><br/>
    <ul>
    <li>0. Open folder in terminal</li>
    <li>1. <code>cd messotopia</code></li>
    <li>2. <code>npm install</code></li>
    <li>3. <code>npm start</code></li>
    </ul>
This will open the webpage.<br/>
<br/>
#Use Given Username and password to login into the system.
<ul>
<li>Email:bchhabra2490@gmail.com</li>
<li>Password:abcde</li>

## Tests

To be added with Projects's Progress.

## Contributors

Bharat Chhabra - 101412012
Chirag Shahi - 101412013
Dikshit Kalra - 101412014
Gursimran Singh - 101412016

## License
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
