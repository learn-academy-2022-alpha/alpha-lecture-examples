# RUBY METHODS

# Everything is an object in Ruby which means functions are technically methods

# Every method starts with def and will have a descriptive name
# Every def needs a corrsponding end
# end is like the closing curly in javascript

def greeter
  'Hello World!'
end

p greeter

# Ruby automatically returns the last line of every method which is called an implicit return

# METHODS WITH ARGUEMENTS

def greeter name
  "Hello #{name}!"
end

p greeter "Sarah"


# MULTIPLE ARGUEMENTS

# While we do not need parenthesis for a param or arguement, when using multiple arguements it is good practice to use parenthesis

def multiply(num1, num2)
  num1 * num2
end

p multiply(3, 7)
p multiply(10, 2)
p multiply(4, 8)


# def multiply num1, num2
#   num1 * num2
# end

# p multiply 3, 7



# METHODS WITH CONDITIONALS

# Every def needs an end
# every if needs an end

def greater_num(num1, num2)
  if num1> num2
    "#{num1} is greater"
  elsif num1 < num2
    "#{num2} is greater"
  else
    "#{num1} and #{num2} are equal"
  end
end

p greater_num(27, 22)
p greater_num(20, 22)
p greater_num(22, 22)


# GETTING USER INPUT

puts 'Please enter your name'
user_name = gets.chomp
# p user_name.class
puts 'Please enter your age'
user_age = gets.chomp.to_i
p user_age.class

def can_you_vote(name, age)
  if age >= 18
    "Hi #{name}!  #{age} is old enough to vote"
  else
    "Hi #{name}!  #{age} is not old enough to vote"
  end
end


p can_you_vote(user_name, user_age)