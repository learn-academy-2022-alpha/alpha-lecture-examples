# Ruby Blocks and Iterables

# Blocks
# - anonymous functions that are passed to a method
# - Blocks provide iteration methods more context
# - defined by the keywords `do/end` OR `{}`

# Iterators
# - means doing something mulitple times
# - Collecting data, return all the elements one after another
# - Use iterators: "while", "each", "ranges", "map", and "select"

# While 
- Keyword in Ruby
- loop that performs iteration
- `while` needs `end`
- `while` takes a condition

# Syntax
while condition
  # code to be executed
end

# Output 1-10
num = 1
while num <= 10
  p num
  num += 1
end

array = []
num = 1
while num <= 10
  array << num += 1
end
p array
# --> [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

array = []
num = 1
while num <= 10
  array << num
  num += 1
end
p array


# Blocks
# - Anonymous functions similar JS
# - is function that gets passed into a method: :
# - Defined in 2 ways : `do/end` OR `{}`

# Syntax 
# do/end
block_name do
  # statement-1
  # statement-2
end

# # {}
block_name { statement-1 }


# Each
#--------

num = [2, 3, 4]
num.each do
  p 'hello'
end
# --> 
# "hello"
# "hello"
# "hello"

num = [2, 3, 4]
num.each do |value|
  p value
end
# --> 
# 2
# 3
# 4

array = ['a', 'l', 'p', 'h', 'a']
array.each do |value|
  p value
end
# --> 
# "a"
# "l"
# "p"
# "h"
# "a"

(1..3).each do |i|
  puts i
end
# -->
# 1
# 2
# 3

# Ranges
# - Uses ".." or "..." operators
# - Is an object which has a starting point and ending point

# # Ex Numbers
1..5
1...5

range = 1..3
range.each do |value|
  p value
end

range = 'a'..'f'
range.each do |value|
  p value
end
# -->
# "a"
# "b"
# "c"
# "d"
# "e"
# "f"

range = 1...10
range.each do |value|
  if value % 2 == 0
    p 'even'
  else
    p 'odd'
  end
end
# -->
# "odd"
# "even"
# "odd"
# "even"
# "odd"
# "even"
# "odd"
# "even"
# "odd"
# "even"

# Map
# - Main use of the map method is to TRANSFORM data
# - iterator that a array, returns a new array

letters = ['a', 'b', 'c', 'd']
letters.map do |s|
  p s.upcase
# end
# --> 
# "A"
# "B"
# "C"
# "D"

numbers = [4, 5, 6, 7]
muliply = numbers.map do |value|
  value * 3
end
p muliply
--> 
[12, 15, 18, 21]

def even_or_odd(nums)
  nums.map do |value|
    if value % 2 == 0
      'even'
    else
      'odd'
    end
  end
end
p even_or_odd(1..7)
p even_or_odd([33, 35, 22, 46])

# Select
# - Similar to filter in JS.  
# - Built in if/else, returns a boolean

greetings = ['hey', 'yo', 'sup', 'hello']
def has_e(array)
  array.select do |value|
    value.include?('e')
  end
end
p has_e(greetings)
p has_e(['hi', 'there', 'alpha', 'student'])
-->
["hey", "hello"]
["there", "student"]