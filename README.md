# blog-template

# Description
  Create and manage a website to manage and generate blogging templates, this is a secured site with a login to help protect client information and work.
  
# Website Set-Up
  1. Create a GitHUb repo called blog-template and clone it to your computer
  
  2. Make a package.json file by running npm init from the command line.
  
  3. Install the Express npm package: npm install express.

  4. Create a server.js file.

    <br />
  <p align="center"> 
<br />
<img src="./server.PNG" alt="coding for server" id="code for server javascript" height="500px" width="500px">
 
</p>

  
  5. Install the Handlebars npm package: npm install express-handlebars.

     <br />
  <p align="center"> 
<br />
<img src="./main handlebars.PNG" alt="coding for handlebars" id="code for handlebars" height="500px" width="500px">
 
</p>

  6. Install MySQL npm package: npm install mysql.

  7. Require the following npm packages inside of the server.js file:

* express DB Setup
1. Inside your blog_template directory, create a folder named db.

2. In the db folder, create a file named schema.sql. Write SQL queries this file that do the following:

3. Create the blogger.

4. Switch to or use the blogger.

5. Create a blogger table with these fields:

    1. id: an auto incrementing int that serves as the primary key.
  
    2. !!!!!!!!!!!!!!!!!!!!.
  
    3. !!!!!!!!!!!!!!!!!!!!!!!.

6. Still in the db folder, create a seeds.sql file. In this file, write insert queries to populate the burgers table with at least three entries.

!!!!! add seed image here !!!!!!!

7. Run the schema.sql and seeds.sql files into the mysql server from the command line

* Run SQL files.

1. Make sure you're in the db folder of your app.

2. Start MySQL command line tool and login: mysql -u root -p.

3. With the mysql> command line tool running, enter the command source schema.sql. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

4. Now insert the entries you defined in seeds.sql by running the file: source seeds.sql.

   <br />
  <p align="center"> 
<br />
<img src="./seed.png" alt="seed from mysql database" id="code for seeding in mysql" height="500px" width="500px">
 
</p>


5. Close out of the MySQL command line tool: exit.

* Controller setup

1. Inside your blogger directory, create a folder named controllers.

2. In controllers, create the controller.js file.

3. Inside the controller.js file, import the following:

* Express
1. index.js

   <br />
  <p align="center"> 
<br />
<img src="./index 1.PNG" alt="coding for index 1" id="code for index javascript" height="500px" width="500px">
 
</p>

   <br />
  <p align="center"> 
<br />
<img src="./index 2.PNG" alt="coding for index 2" id="code for index javascript" height="500px" width="500px">
 
</p>


2. Create the router for the app, and export the router at the end of your file.