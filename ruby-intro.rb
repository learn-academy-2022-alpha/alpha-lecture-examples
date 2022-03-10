# Ruby Intro 3/9/2022

# Working in the the Ruby console:
# ➜ irb

# Integers
# 3.0.0 :001 > 1 + 2
#  => 3
# 3.0.0 :002 > 4 - 3
#  => 1
# 3.0.0 :003 > 3 * 3
#  => 9
# 3.0.0 :004 > 5 / 3
#  => 1
# 3.0.0 :005 > 4 ** 3
#  => 64
# 3.0.0 :006 > 5 % 2
#  => 1

# Floats
# 3.0.0 :007 > 1.0
#  => 1.0
# 3.0.0 :008 > 5 / 3
#  => 1
# 3.0.0 :009 > 5.0 / 3
#  => 1.6666666666666667

# Strings - single quotes
# 3.0.0 :010 > 'hello'
#  => "hello"
# 3.0.0 :011 > "hey y'all"
#  => "hey y'all"

# Boolean - equality, relational, logial operators
# 3.0.0 :012 > true
#  => true
# 3.0.0 :013 > false
#  => false
# 3.0.0 :014 > 6+6 == 12
#  => true
# 3.0.0 :015 > 6 < 4
#  => false
# 3.0.0 :016 > 5 > 4
#  => true
# 3.0.0 :017 > 5 <= 0
#  => false
# 3.0.0 :018 > 7 >= 8
#  => false
# 3.0.0 :019 > 4 != 2+2
#  => false
# 3.0.0 :020 > 6 <  4 && 4 > 6
#  => false
# 3.0.0 :021 > 6 > 4 || 4 > 6
#  => true

# Nil - equal to nothing else
# 3.0.0 :022 > nil
#  => nil

# String Interpolation
# 3.0.0 :023 > my_name = 'sarah'
#  => "sarah"
# 3.0.0 :024 > "Hey there, #{my_name}"
#  => "Hey there, sarah"

# String Methods
# 3.0.0 :025 > my_name.length
#  => 5
# 3.0.0 :026 > my_name.upcase
#  => "SARAH"
# 3.0.0 :027 > my_name.capitalize
#  => "Sarah"
# 3.0.0 :029 > my_name.reverse
#  => "haras"
# 3.0.0 :030 > my_name * 3
#  => "sarahsarahsarah"
# 3.0.0 :031 > my_name.reverse
#  => "haras"
# 3.0.0 :032 > my_name
#  => "sarah"

# Mutators
# 3.0.0 :034 > my_name = my_name.reverse
#  => "haras"
# 3.0.0 :035 > my_name
#  => "haras"
# 3.0.0 :036 > my_name.reverse!
#  => "sarah"
# 3.0.0 :037 > my_name
#  => "sarah"

# Passing Arguments
# 3.0.0 :038 > my_name.delete'h'
#  => "sara"
# 3.0.0 :039 > my_name.delete('h')
#  => "sara"
# 3.0.0 :040 > my_name.include?('s')
#  => true

# Class
# 3.0.0 :041 > 'sarah'.class
#  => String
# 3.0.0 :042 > 1.class
#  => Integer
# 3.0.0 :043 > 1.0.class
#  => Float
# 3.0.0 :044 > true.class
#  => TrueClass
# 3.0.0 :045 > false.class
#  => FalseClass
# 3.0.0 :046 > false
#  => false

# Changing Data Types
# 3.0.0 :047 > 4.to_s
#  => "4"
# 3.0.0 :048 > '9'.to_i
#  => 9

# Arrays
# 3.0.0 :049 > my_array = [2, 3, 4, 5, 6]
#  => [2, 3, 4, 5, 6]
# 3.0.0 :050 > my_array
#  => [2, 3, 4, 5, 6]
# 3.0.0 :051 > my_array[0]
#  => 2
# 3.0.0 :052 > my_array.length
#  => 5
# 3.0.0 :053 > my_array[-1]
#  => 6
# 3.0.0 :054 > my_array[-2]
#  => 5
# 3.0.0 :055 > my_array.first
#  => 2
# 3.0.0 :056 > my_array.last
#  => 6
# 3.0.0 :057 > my_array.reverse
#  => [6, 5, 4, 3, 2]
# 3.0.0 :058 > my_array
#  => [2, 3, 4, 5, 6]
# 3.0.0 :059 > my_array.reverse.first
#  => 6
# 3.0.0 :060 > my_array
#  => [2, 3, 4, 5, 6]

# Array Mutators
# 3.0.0 :061 > my_array[0] = 99
#  => 99
# 3.0.0 :062 > my_array
#  => [99, 3, 4, 5, 6]
# 3.0.0 :063 > my_array << 88
#  => [99, 3, 4, 5, 6, 88]
# 3.0.0 :064 > my_array
#  => [99, 3, 4, 5, 6, 88]
# 3.0.0 :065 > exit

# $ ruby file-path.rb

my_name = 'sarah'
puts my_name
p my_name

puts [4, 5, 6, 7]
p [4, 5, 6, 7]
