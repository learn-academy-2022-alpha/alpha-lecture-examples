# Getting Started
As always we are going ot need a to make a rails app
```
    $ rails new food_app -d postgresql -T

    $ rails db:create

    $ rails g controller Food 
```

create  app/controllers/food_controller.rb
invoke  erb
create    app/views/food
invoke  helper
create    app/helpers/food_helper.rb

# Overview - Goals
- Generating a view for the user

- Navigating between views

- Understanding the basics of creating a request response cycle in Rails

# Vocab
Controller
View
Routes
ERB
Params


# Controller
The controller is responsible for routing extrenal req.s into internal actions

  - when we navigate to our favorite website we get back a payload of html and a status code of 200

- managing caching of data
- managing our helpers (something we don't really get into here at LEARN)
- managing user sessions, giving users the IMPRESSION of ongoing interactions with our application

# Routes
 In order for our Rails server to respond to a request to this url, it needs a particular path and an http verb. A routes.rb file in the config folder is created when you run rails new. This file is intended to house all valid urls in your application.

 # Recap
1. made an app
2. created a db
3. generated a controller
  3a. controller is responsible for mappin external requests to internal actions
  3b. added methods to our controller to render some html
4.  added routes for our controller methods
  4a. HTTP Verb - get post put patch delete
  4b. location / url
  4c. hash rocket 
  4d. controller
    4d.1 #
  4e. method

  