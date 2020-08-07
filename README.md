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
<img src="./server.PNG" alt="coding for server" id="server_javascript" height="500px" width="500px">
 
</p>

  
  5. Install the Handlebars npm package: npm install express-handlebars.

     <br />
  <p align="center"> 
<br />
<img src="./main handlebars.PNG" alt="coding for handlebars" id="handlebars" height="500px" width="500px">
 
</p>

  6. Install MySQL npm package: npm install mysql.

  7. Require the following npm packages inside of the server.js file:

* express DB Setup
1. Inside your blog_template directory, create a folder named db.

2. In the db folder, create a file named schema.sql. Write SQL queries this file that do the following:

3. Create the blogger.

4. Switch to or use the blogger.

5. Create a blogger table with these fields for each of the templates:

    1. id: an auto incrementing int that serves as the primary key.

       <br />
  <p align="center"> 
<br />
<img src="./mysql_schema.PNG" alt="coding for database via mysql" id="DB_mysql" height="500px" width="500px">
 
</p>

6. Still in the db folder, create a seeds.sql file. In this file, write insert queries to populate the burgers table with at least three entries.

   <br />
  <p align="center"> 
<br />
<img src="./seed.png" alt="seed from mysql database" id="seeding_mysql" height="500px" width="1000px">
 
</p>


7. Run the schema.sql and seeds.sql files into the mysql server from the command line

* Run SQL files.

1. Make sure you're in the db folder of your app.

2. Start MySQL command line tool and login: mysql -u root -p.

3. With the mysql> command line tool running, enter the command source schema.sql. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

4. Now insert the entries you defined in seeds.sql by running the file: source seeds.sql.

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
<img src="./index 1.PNG" alt="coding for index 1" id="index_javascript2" height="500px" width="500px">
 
</p>

   <br />
  <p align="center"> 
<br />
<img src="./index 2.PNG" alt="coding for index 2" id="index_javascript1" height="500px" width="500px">
 
</p>

2. Create the router for the app, and export the router at the end of your file.

* View setup

1. Inside your blogger directory, create a folder named views.

2. Create the index.handlebars file inside views directory.

3. Create the layouts directory inside views directory.

4. Create the main.handlebars file inside layouts directory.

   <br />
  <p align="center"> 
<br />
<img src="./main handlebars.PNG" alt="coding for handlebars" id="main_handlebars" height="500px" width="500px">
 
</p>


5. Setup the main.handlebars file so it's able to be used by Handlebars.

6. Setup the index.handlebars to have the template that Handlebars can render onto.

7. Create a form and buttons in post.handlebars that will submit the user input into the database via the form provided on the blogger template page.

<br />
  <p align="center"> 
<br />
<img src="./layout submits.PNG" alt="coding for blog templates" id="blog_templates" height="500px" width="500px">
 
</p>


8. Create buttons to link the forms page to the greeting page and the post page back to home page.

 <br />
  <p align="center"> 
<br />
<img src="./button to post.PNG" alt="coding for post page" id="post_button" height="200px" width="500px">
 
</p>

 <br />
  <p align="center"> 
<br />
<img src="./button to home.PNG" alt="coding for home page" id="home_button" height="200px" width="500px">
 
</p>

9. Link layouts, home and post buttons through the bloginputs.js.

 <br />
  <p align="center"> 
<br />
<img src="./layout button links.PNG" alt="coding for layout buttons" id="layout_buttons" height="200px" width="500px">
 
</p>

<br />
  <p align="center"> 
<br />
<img src="./post and home buttons.PNG" alt="coding for home and post buttons" id="nav_buttons" height="200px" width="500px">
 
</p>

* Creating Layouts

1. 

* Creating the Authentication Page

1. 