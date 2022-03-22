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

# Views
create a file in app/controller_name
With: 
- the name of our method
- the HTML extension
- the embedded ruby extension


We can add ruby code to our html.erb file using the 
  <% %> - which will be invisible
  or the
  <%= %> which will be visible
```html
<h1>hello world</h1>
<p> Why are you so corny </p>

<%= @how_to_make_corn %>
```

<%= link_to 'place I want to go', '/route_for_that_place' %>


# Recap 2
1. made an app
2. created a db
3. generated a controller
  3a. controller is responsible for mapping external requests to internal actions
  3b. added methods to our controller to render some html
4.  added routes for our controller methods
  4a. HTTP Verb - get post put patch delete
  4b. location / url
  4c. hash rocket 
  4d. controller
    4d.1 #
  4e. method
5. Created a html.erb file in the views/name_of_controller folder
  5a. wrote something so we could make sure it was working
6. set up instructions in the controller method to render the new html.erb file
  6a. troubleshot the 'render' issue
7. embded an each do block on the taco page
  7a. displayed each value in our instance variable from our controller method on the page as a list item
8. we linked our pages together using a link_to

# Params
Parameters allow us to add more information to our program by passing a value into the controller.
```ruby
def spaghetti
    @person = 'keelan'
    'spaghetti.html.erb'
  end
```
We are used to seeing variables defined to specific pieces of data. But this prevents us from making dynamic apps. 


Params allow us to pass information into our URL so we can save that data and work with it. To do that we create symbol inside of square brackets with the keyword params in our controller method.

```ruby
variable_name = params[:symbol]
```
so together it looks like...
```ruby
def spaghetti
    @person = params[:people_singular]
    'spaghetti.html.erb'
end
```
and in the routes.rb file we update the url path to require some input for our variable
```ruby
get '/spaghetti/:people_singular'=> 'food#spaghetti'
```


With all that done we can do some logic to this data and transform the data in any way we like. 
```ruby
def spaghetti
    @person = params[:people_singular]
    if @person == "keelan"
      @person = "the coolest"
    end
    'spaghetti.html.erb'
  end
```

# Recap 2
1. made an app
2. created a db
3. generated a controller
  3a. controller is responsible for mapping external requests to internal actions
  3b. added methods to our controller to render some html
4.  added routes for our controller methods
  4a. HTTP Verb - get post put patch delete
  4b. location / url
  4c. hash rocket 
  4d. controller
    4d.1 #
  4e. method
5. Created a html.erb file in the views/name_of_controller folder
  5a. wrote something so we could make sure it was working
6. set up instructions in the controller method to render the new html.erb file
  6a. troubleshot the 'render' issue
7. embded an each do block on the taco page
  7a. displayed each value in our instance variable from our controller method on the page as a list item
8. we linked our pages together using a link_to
9. created a dynamic variable using params
10. Did some logic with our params
  10a.a remebering that params are always come to us as a string
11. we create params which are keys to a hash and the value of the key value pair comes from the URL