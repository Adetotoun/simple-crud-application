# simple-crud-application
The folder structure follows the Model-View-Controller pattern. The components of the application are divided into different modules to makes it easier to debug error, test and maintain the application.

The parent Folder is the user-post folder that contains 5 sub dolders and 6 files.
    **The databse file used for database connection setup is in the config folder.
    **The model file is for the business logic it's saved in the controller folder.
    **The controller file acts as an intermediary, processes data and sends to the either the model or view component.
    **The node_modules consist of node libaries.
    **The routes folder consist of the paths to different end points.


The port number for the application server and the database was setup on the environment variable file which was secured using the gitignore file.

To run the application locally, pull the application from github to your local system, test ech endpoint according to the defined request, taking note of the port number. Use Thunder Client(an extension) in your VSCode.

