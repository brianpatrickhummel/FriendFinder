# FriendFinder

A full-stack Friend Finder application which allows users to complete a survey, answering 10 questions about their personality.  The app then adds the new user and his/her survey results to an array of 'Friends' objects and compares the results against all of the other potential friends in the array.  The most compatible match is determined and the name and photo of the Friend match is displayed on the page.

Front-end design is a combintation of the following:  The Bootstrap Framework, Magister HTML5 template, Chosen jQuery plugin for construction of the survey, Validate jQuery plugin for survey form validation, Vex JS Library for Modal Dialog Boxes, Handlebars templating, animations via Animate.css and icons by FontAwesome.

Back-end is Node.js using the Express framework to serve as a basic API to handle AJAX requests, querying against an array of 'Friends' objects. Manual API/HTML routing.

FIRST USE OF EXPRESS FRAMEWORK and HANDLEBARS TEMPLATING



# Explanation of essential files

* app
  * public
    * assets
      * css 
        * animate.css-----------*CSS Animations Library*
        * chosen.css--------------*jQuery plugin for Select Boxes*
        * magister.css--------------*Main CSS styles*
        * vex-theme-flat-attack.css---*Dialog Box Library Theme Styles*
        * vex.css-----------------------*Dialog Box Library Core Styles*
      * fonts
        * cass.ttf
        * Prisma.otf
        * Prisma.ttf
      * images
      * body4.jpg--------*Background image*
      * js
        * app.js---------------*form input/validation, POST to API, friend match logic*
        * chosen.jquery.js--------*JS for Chosen Select Boxes plugin*
        * jquery.validate.js---------*JS for Validate plugin - form validation*
        * magister.js-------------------*JS for HTML site, navigation*
        * modernizr.customer.72241.js------*User browser feature detections plugin*
        * vex.combined.min.js----------------*JS for Vex Dialog Box Library*
    * index.html----------*Home Page HTML*
    * survey.html-------------*Survey Page HTML*
  * routing
    * apiRoutes.js---------*Defines API Routes*
    * htmlRoutes.js------------*Defines HTML Routes*
* data
  * friends.js-------------*Array containing friends JSON Object*
* node_modules
  * body-parser
  * express
  * express-handlebars
  * handlebars
  * path
* views
  * layouts
      * main.handlebars-----*Default Handlebars Template File*
  * friends.handlebars----------*Handlebars Injection Template for Friends display*
* server.js-------------------------*Server Configuration*