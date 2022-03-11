# Javascript arrays
# var starTrek = ["Spock", "Scotty", "Worf"]
# Javascript objects
# var starTrek = {intelligence: "Spock", mechanic: "Scotty", security: "Worf"}


# 1st method of creating a Ruby hash
# star_trek = {intelligence: 'Spock', mechanic: 'Scotty', security: 'Worf'}
# p star_trek

# Output: {:intelligence=>"Spock", :mechanic=>"Scotty", :security=>"Worf"}


# 2nd method of creating a Ruby hash
# my_hash = Hash.new
# p my_hash

# Output: {}


# Manipulating hashes
# Return content
star_trek = {intelligence: 'Spock', mechanic: 'Scotty', security: 'Worf'}
# p star_trek

# Output: {:intelligence=>"Spock", :mechanic=>"Scotty", :security=>"Worf"}

# Return one value in the hash
p star_trek[:mechanic]

# Output: "Scotty"

# Create content
star_trek[:captain] = 'Jean-Luc Picard'
p star_trek

# Output: {:intelligence=>"Spock", :mechanic=>"Scotty", :security=>"Worf", :captain=>"Jean-Luc Picard"}

# Update existing content
star_trek[:captain] = 'Jean-Luc'
p star_trek

# Output: {:intelligence=>"Spock", :mechanic=>"Scotty", :security=>"Worf", :captain=>"Jean-Luc"}

# Delete content
star_trek.delete(:mechanic)
p star_trek

# Output: {:intelligence=>"Spock", :security=>"Worf", :captain=>"Jean-Luc"}

# Enumerable module - grouping of things that iterable, like hashes, arrays, ranges 
# arrays
star_fleet = ["Spock", "Scotty", "Worf"]
p star_fleet.reverse

# Output: ["Worf", "Scotty", "Spock"]

# strings
p "Scotty".reverse

# Output: "yttocS"

# Duck typing - applying the same method to different datatypes 


# High order functions
star_trek = {intelligence: 'Spock', mechanic: 'Scotty', security: 'Worf'}

# star_trek.each do |key, value|
#   p "#{value} served Starfleet in the #{key} department."
# end

# Output:
# "Spock served Starfleet in the intelligence department."
# "Scotty served Starfleet in the mechanic department."
# "Worf served Starfleet in the security department."

# Save the hash in a variable
# fleet = star_trek.map do |key, value|
#           "#{value} served Starfleet in the #{key} department."
#         end
# p fleet

# Output: ["Spock served Starfleet in the intelligence department.", "Scotty served Starfleet in the mechanic department.", "Worf served Starfleet in the security department."]


# Another way to accomplish the step from the map method. Create a method that iterates across the previous hash 

def fleet_speak hash
  hash.map do |key,value|
    "I want a ring tone with #{value}'s voice."
  end  
end

p fleet_speak star_trek

# Output: ["I want a ring tone with Spock's voice.", "I want a ring tone with Scotty's voice.", "I want a ring tone with Worf's voice."]