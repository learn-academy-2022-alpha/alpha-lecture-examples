## Drop previous databases
- close any servers and browsers that were running any rails app you are no longer using
- cd into that repository
- $ rails db:drop
- $ cd .. && rm -rf app_name
- empty trash folder

## Markdown file for challenges
- cd into the database-challenges repository
Create a new branch: 
- $ rails-associations-initials1-initials2
Create a file: 
- $ rails-associations-student1-student2.md 
- Keep a record of steps you used to create the application
- You will push the branch with this markdown file to gitHub

## Set Up
Creating a new Rails app:
- $ rails new instructor_band -d postgresql -T
- $ cd instructor_band
- $ rails db:create
- $ rails s
- In a browser navigate to: http://localhost:3000 or 127.0.0.1:3000

## Interact with the rails app
- $ code .

## Create Member table
- $ rails g model Member name:string role:string

To make sure our app gets the model we just created
- $ rails db:migrate

## Checkout what Rails created for us
- db/migrate
The migration command creates a timestamped file in db/migrate with the changes made to the database. In this case, the change is the initial creation of the Member table.

- app/models/member.rb
There is now a file inside app/models for the model class. The file name will be singular and snake_case.

- db/schema.rb
This is the "shape" of the database: the columns and data types of those columns. The name will become plural.

## Rails console to make entries
### CRUD
#### Create
> Member.create name: "Charlean", role: "cowbell player"
> Member.create name: "Austin", role: "guitarist"

#### Read
> Member.all
We don't have to assign each Member an id, Rails will do this automatically.

#### To leave rails console
> exit

## Create Deposit Table
- $ rails g model Deposit routing:string account:string amount:string member_id:integer
- $ rails db:migrate

This will provide another file in app/model, another migration db/migrations, and update the schema of our application db/schema.rb.

## Create Association
### Updating the Class

We need to describe the one-to-many relationship to each of the model classes.

#### app/models/member.rb
has_many :deposits

#### app/models/deposit.rb
belongs_to :member

### Create a new entry of a deposit
Go to the rails console. We have to assign a deposit to a member entry. It cannot exist unless it is attached to a member entry.

- $ rails c

#### create a variable to store the entry of one member using the find method
> austin = Member.find 2

> austin.deposits.create account:"P8YM3", pay:"15,000"

#### create a variable to store the entry of one member using the where method
> charlean = Member.where role:"cowbell player"

Datatype being held by the charlean variable is an array:

[#<Member:0x00000001215a1b68  
  id: 2,                      
  name: "Charlean",           
  role: "cowbell player",     
  created_at: Mon, 21 Mar 2022 16:52:00.897257000 UTC +00:00,
  updated_at: Mon, 21 Mar 2022 16:52:00.897257000 UTC +00:00>] 

Therefore, we will need to verify which index holds the member entry we want our deposit entry to be attached to (belong to).

> cowbell = charlean[0]

Datatype being held by the cowbell variable is a hash:

#<Member:0x00000001215a1b68   
 id: 2,                       
 name: "Charlean",            
 role: "cowbell player",      
 created_at: Mon, 21 Mar 2022 16:52:00.897257000 UTC +00:00,
 updated_at: Mon, 21 Mar 2022 16:52:00.897257000 UTC +00:00> 

> cowbell.deposits.create account:"S8CR8TM0N8Y", pay:"7,000"

Because we have specified the association already, we can now enter an additional deposit entry for any member.

> cowbell.deposits.create account:"0URB177$", pay:"6,000"
