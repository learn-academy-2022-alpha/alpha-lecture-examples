# Rails Full-stack


CRUD
HTTP Verbs
RESTful routes
- index - see all
- show - just one herb
- create - adding new content to the db
- new
- update - modification, which herb is being changed?
- edit
- destroy

Herb Garden

Model
rails g model Herb name:string watered:string
rails db:migrate


Controller
rails g controller Herb


Index - controller method, route, view
Show - controller method, route, view, navigation
New - controller method, route, view with form_with helper, navigation to the form page
Create
