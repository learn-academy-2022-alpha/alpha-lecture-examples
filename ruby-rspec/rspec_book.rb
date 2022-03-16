class Book
  # Creates a setter and getter method
  attr_accessor :title, :author, :page 
  # Setter method with instance variables
  def initialize author='anonymous' # Param for if author is not passed we set to anonymous
    @title = title
    @author = author
    @page = 1 # Always start at first page
  end

  # Creating method to change page number
  def read pages_read
    @page += pages_read
  end
end