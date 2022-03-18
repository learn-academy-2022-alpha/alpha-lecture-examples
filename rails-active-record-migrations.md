## Database challenge setup
- Note: When working on the database challenges, you will have a markdown file that you will save your challenges and push to gitHub.

https://github.com/learn-academy-2022-alpha/database-challenges

### Process
- cd into the database-challenges repository
- Create a new branch: rails-migrations-initials1-initials2
- Create a file: rails-migrations-student1-student2.md 
- Code!
- You will push this branch that holds the markdown file to the repository


## Rails setup
- $ rails new instructor_band -d postgresql -T
- $ cd instructor_band
- $ rails db:create
- $ rails server
- In a browser navigate to: http://localhost:3000 or 127.0.0.1:3000
- $ rails generate model Member name:string role:string event:integer
- $ rails db:migrate


The generate command for model takes the name of the model we intend to create, the name of each column, and the data type of each column as arguments. The name of the model is uppercase and singular by convention.

- $ rails generate model Member name:string role:string event:integer

To make sure our app gets the model we just created
- $ rails db:migrate

Go to console and add entries into the database
- $ rails c

## CRUD Actions in rails console
https://github.com/learn-academy-2022-alpha/Syllabus/blob/main/rails/active-record-intro.md

- CREATE
> Member.create name: "Beau", role: "drummer", event: 14

> Member.create name: "Elyse", role: "singer", event: 23

> Member.create name: "Charlean", role: "cowbell player", event: 8

> Member.create name: "Austin", role: "guitarist", event: 8

> Member.create name: "Sarah", role: "violinist", event: 8

- READ
> Member.all

Notice each Member has a key:value pair that is id and a number. This is called a primary key and is a unique identifier of each instance. We don't have to assign each Member an id, Rails will do this automatically.

- UPDATE/EDIT
> elyse = Member.find 2

> elyse.event = 22

> elyse.save

- DELETE
> charlean = Member.find 3

> charlean.destroy

> Member.all

The customer called you and stated that they want to change some stuff in the AlphaBand Db. The needs of projects change over time and the needs of how to store your data can change. Migration answers the questions of how do we add another section or store info with a new datatype or change column headers of previous information.

Leave the rails console
> exit

We will need to add the pay column to the Member table. For this example, we'll use snake_case for our naming convention.
- $ rails generate migration add_column_pay_to_member

This becomes our record and instructions to add our column header pay to the table.

## Add a column to def change method in db/migrate
- Structure ---> add_column :table_name, :column_name, :datatype
- add_column :members, :pay, :integer

To make sure our app gets the model we just created
- $ rails db:migrate

## Change name of column header to def change method in db/migrate
- $ rails generate migration change_name_of_pay_to_hourly_pay
db/migrate
- Structure ---> rename_column :table, :old_column, :new_column
- rename_column :members, :pay, :hourly_pay
- $ rails db:migrate

The data has not change, but the structure holding it has. The columns that have been added does not have data entries and will display nil. Let's update our data.

## Update the data entries for the nil values 
> beau = Member.find 1

> beau.update hourly_pay:200