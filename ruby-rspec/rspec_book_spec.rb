# TDD - Test Driven Development
  # Write tests first - fail
  # Write code - pass
  # Refactor as needed confidently
  # red-green-refactor

require 'rspec'
require_relative 'rspec_book'

describe 'Book' do 
  it 'has to be real' do
    # curlies in expect will expect a behavior
    expect{ Book.new }.to_not raise_error
  end
  it 'has a title' do
    pood = Book.new
    pood.title = 'POOD' # Setter method
    # Assert
    # parenthesis in expect will expect data
    expect(pood.title).to eq 'POOD' # Getter method
  end
  it 'has an author' do
    # Test default value as anonymous
    pood = Book.new
    # Assert if I give nothing to author I get back anonymous
    expect(pood.author).to eq 'anonymous'
    pood.author = 'Sandy Metz'
    expect(pood.author).to eq 'Sandy Metz'
  end
  it 'can report the current page' do
    pood = Book.new
    expect(pood.page).to eq 1
    expect(pood.page).to be_a Integer
  end
  it 'can read pages' do
    pood = Book.new
    expect{ pood.read 10 }.to change{ pood.page }.from(1).to(11)
  end
end