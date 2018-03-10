# videoApp

This is a prototype video application created using Javascript to call and render content from a database.
When you choose your access level, either Parent or Child, different movies are displayed depending.
Clicking on a movie image takes you to a page that would probably playing the movie in a Netflix-esque setting, but for testing purposes, just a clip here.
As you explore this small application, you should be able to see much of the data being pulled from the DB outputting in the terminal window.

Only the following movies have clips associated with them, as finding clips for all seemed like a waste of time and space for prototyping:
  - Blade Runner 2049
  - The Incredibles
  - Cars
  - 2001: A Space Odyssey


---------------------
-*-TO RUN THIS APP-*-
---------------------

        Download Zip, Unpack and place 'videos' directory inside the 'public' directory.
        Run NPM Install and npm express-handlebars

        Make sure your MAMP/WAMP/XAMP/LAMP/DAMP/TRAMP/STAMP is running
        Create a new Database using MYPHPADMIN called db_videoApp
        Import the 'db_videoApp.sql' file into that database
        Change the port in config.js to 3306 if on PC (or whatever your PHPMYADMIN tells you you're using)

        Do an npm start from the root directory
        navigate to localhost:3000 in your preferred browser that isn't Chrome. I don't know what Chrome's problem is.

        Now you should be able to click on the access level buttons to see a certain selection of movie appear.
        All movies that appear under the kids access also appear under the parents, because who am I to tell an adult what to watch?
        Clicking on the filter buttons near the top of the page will further filter the movies by genre.
            ** This causes the image links to break.
            ** I think this is because the url change makes the routing back to the images folder incorrect, but I haven't found a fix.

        Clicking on one of the movie thumbs mentioned above will bring you to a clip from that movie.
        Again, they are:
            - Blade Runner 2049
            - The Incredibles
            - Cars
            - 2001: A Space Odyssey
