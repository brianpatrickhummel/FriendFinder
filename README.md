# FriendFinder

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
      * body4.jpg----------------*Background image*
      * js
        * app.js-----------------*form input/validation, POST to API, friend match logic*
        * chosen.jquery.js---------*JS for Chosen Select Boxes plugin*
        * jquery.validate.js---------*JS for Validate plugin - form validation*
        * magister.js------------------*JS for HTML site, navigation*
        * modernizr.customer.72241.js----*User browser feature detections plugin*
        * vex.combined.min.js--------------*JS for Vex Dialog Box Library*
    * index.html------------------*Home Page HTML*
    * survey.html-------------------*Survey Page HTML*
  * routing
    * apiRoutes.js----------------*Defines API Routes*
    * htmlRoutes.js-----------------*Defines HTML Routes*
* data
  * friends.js--------------------*Array containing friends JSON Object*
* node_modules
  * body-parser
  * express
  * express-handlebars
  * handlebars
  * path
* views
  * layouts
      * main.handlebars-----------*Default Handlebars Template File*
  * friends.handlebars------------*Handlebars Injection Template for Friends display*
* server.js-----------------------*Server Configuration*