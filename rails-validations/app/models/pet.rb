class Pet < ApplicationRecord
  validates :name, :age, presence: true
  validates :name, length: { minimum: 3 }
  validates :name, uniqueness: true
end
