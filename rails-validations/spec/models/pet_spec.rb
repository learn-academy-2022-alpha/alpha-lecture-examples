require 'rails_helper'

RSpec.describe Pet, type: :model do
  it 'valid with valid attributes' do
    hyndrangeas = Pet.create(name: 'Hyndrangeas', age: 4, species: 'cat', breed: 'Russian Blue')
    expect(hyndrangeas).to be_valid
  end
  it 'is not valid without a name' do
    hyndrangeas = Pet.create(age: 4, species: 'cat', breed: 'Russian Blue')
    expect(hyndrangeas.errors[:name]).to_not be_empty
  end
  it 'is not valid without an age' do
    hyndrangeas = Pet.create(name: 'Hyndrangeas', species: 'cat', breed: 'Russian Blue')
    expect(hyndrangeas.errors[:age]).to_not be_empty
  end
  it 'name is not valid if less than three characters' do
    hyndrangeas = Pet.create(name: 'H', age: 4, species: 'cat', breed: 'Russian Blue')
    expect(hyndrangeas.errors[:name]).to_not be_empty
  end
  it 'each name should be unique' do
    hyndrangeas_valid = Pet.create(name: 'Hyndrangeas', age: 4, species: 'cat', breed: 'Russian Blue')
    hyndrangeas_invalid = Pet.create(name: 'Hyndrangeas', age: 4, species: 'cat', breed: 'Russian Blue')
    expect(hyndrangeas_invalid.errors[:name]).to_not be_empty
  end
end
