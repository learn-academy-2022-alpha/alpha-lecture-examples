- Ruby language framework
- Full Stack Applications Quickly
- MVC Architecture 
  - Model: Brains or business center of the logic of our application, handles our database.
  - View: What a user sees
  - Controller: traffic signal, managing the interaction between the User and the application 

  - When a user can see something, input data, have that data stored for future reference, retrieve that data, or do something with the data - Full Stack Application 

  - Model

# Rails
$ rails new
-> name for our app
-> what database we want to use
-> what to do with our testing enviroment

 $ rails new rails_intro -d postgresql -T

- rails project names need to be lowercase and ideally snake_case
- rails projects should be singular

- Rails is opinionated - that is to say it's super picky about names, syntax and conventions
  - "convention over configuration"

 $ rails db:create

Running via Spring preloader in process 99135
Created database 'rails_intro_development'
Created database 'rails_intro_test'

# Run Rails 
$ rails server 
OR
$ rails s
