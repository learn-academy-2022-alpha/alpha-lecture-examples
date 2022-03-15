# Ruby Classes and Objects

# Class - keyword set our classes
# .new -  keyword method instantiating a class, to make a new object
# initialize - keyword method specific setter method that is called automatically by .new
# attr_accessor - key word method taht creats additional methods.  
# setters and getters methods - set_ and get_


# class NetflixShow
# end

# # p NetflixShow.new
# #<NetflixShow:0x0000000149045278>
# class_example = NetflixShow.new
# p class_example
#-----------------------------

##making objects

# class NetflixShow
#   def set_show_info(title)
#     @title = title
#   end
# end

# #First object
# star = NetflixShow.new
# star.set_show_info('Star Trek')
# p star
# #Second object
# no = NetflixShow.new
# no.set_show_info('New Girls')
# p no
# #<NetflixShow:0x000000016004b2b0 @title="Star Trek">
# #<NetflixShow:0x0000000160049cd0 @title="New Girls">
#-----------------------------

##setter

# class NetflixShow
#   def set_show_info(title, run_time)
#     @title = title
#     @run_time = run_time
#   end
# end

# star = NetflixShow.new
# star.set_show_info('Star Trek', '45min')
# p star
# #<NetflixShow:0x000000012984d300 @title="Star Trek", @run_time="45min">
#-----------------------------

##getter

# class NetflixShow
#   def set_show_info(title, run_time)
#     @title = title
#     @run_time = run_time
#   end
#   def get_title
#     @title
#   end
#   def get_run_time
#     @run_time
#   end
# end

# star = NetflixShow.new
# star.set_show_info('Star Trek', '45min')
# p star.get_title
# p star.get_run_time

# # 
# # "Star Trek"
# # "45min"
# #-----------------------------

##initialize

# class NetflixShow
#   def initialize(title, run_time)
#     @title = title
#     @run_time = run_time
#   end
#   def get_title
#     @title
#   end
#   def get_run_time
#     @run_time
#   end
# end

# star = NetflixShow.new('Star Trek', '45min')
# p star.get_title
# p star.get_run_time

# # "Star Trek"
# # "45min"
# # #-----------------------------

##initialize

# class NetflixShow
#   def initialize(title, run_time)
#     @title = title
#     @run_time = run_time
#     @watched = false
#   end
#   def get_title
#     @title
#   end
#   def get_run_time
#     @run_time
#   end
#   def been_watched
#     @watched = true
#   end
#   def show_data
#     if @watched
#       "You have watched the show called #{@title} which is #{@run_time}."
#     else
#       "You have NOT watched the show called #{@title} which is #{@run_time}."
#     end
#   end
# end

# star = NetflixShow.new('Star Trek', '45min')
# p star.show_data
# star.been_watched
# p star.show_data

# # "Star Trek"
# # "45min"
# # "You have NOT watched the show called Star Trek which is 45min."
# # "You have watched the show called Star Trek which is 45min."
#-------------------------------------

##bringing all together

# class NetflixShow
#   def initialize(title, run_time)
#     @title = title
#     @run_time = run_time
#   end
#   def get_title
#     @title
#   end
#   def get_run_time
#     @run_time
#   end
# end

# star = NetflixShow.new('Star Trek', '45min')
# p star.get_title
# p star.get_run_time

# # "Star Trek"
# # "45min"
# # #-----------------------------

##refactor
##attr_accessor

# class NetflixShow
#   attr_accessor :title, :run_time, :watched
#   def initialize(title, run_time)
#     @title = title
#     @run_time = run_time
#     @watched = false
#   end
#   def show_data
#     if @watched
#       "You have watched the show called #{@title} which is #{@run_time}."
#     else
#       "You have NOT watched the show called #{@title} which is #{@run_time}."
#     end
#   end
# end

# star = NetflixShow.new('Star Trek', '45min')
# p star.title
# star.title = 'DS9'
# p star.show_data
# p star.run_time = '90min'
# p star.show_data
# star.watched = true
# p star.show_data
# # "Star Trek"
# # "You have NOT watched the show called DS9 which is 45min."
# # "90min"
# # "You have NOT watched the show called DS9 which is 90min."
# # "You have watched the show called DS9 which is 90min."