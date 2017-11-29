# Saas for Mess Contractors

## Synopsis

This project is a management software for Mess Contractors where the students could inform the Contractor about their Availablity status for future meals. It helps the Contractor to save wastage on extra food and also bills the students for the particular meals that they consumed during the course of a month. Only those students who are sure about their unavailablity for the next meal can change their status for next meal to  Unavailable(Atleast 4 hrs prior to the meal). By default the status would be Available. Entry in mess would only be guaranteed by the successfully scanning the BarCode for that meal.

## Motivation

Every month 180 kg of food was wasted in Hostel J's mess in the year 2016-17. This was mainly because the Contractor had no idea about the number of students coming for the next meal and thus to avoid shortage he cooked expecting all of them. Since all of us are Hostel Residents from the beginning of the College, we were also billed in excess for the meals that we didn't ate.

## Installation

#Step 1
Install Mysql from MAMP, LAMP or XAMPP. Import the 'db.sql' file from the repo to PHP MyAdmin.
Keep the msyql running.
#Step 2
Install NodeJS and npm. 
    0. Open folder in terminal.
    1. cd api
    2. npm install
    3. Open server.js and change the mysql credentials according to your machine(username,password,database name, host)
    4. npm start
This will start the server.
#Step 3
Install ReactJS.
    0. Open folder in terminal
    1. cd messotopia
    2. npm install
    3. npm start
This will open the webpage.

## Tests

To be added with Projects's Progress.

## Contributors

Bharat Chhabra - 101412012
Chirag Shahi - 101412013
Dikshit Kalra - 101412014
Gursimran Singh - 101412016

## License
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
