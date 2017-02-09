class Ingredient < ApplicationRecord
  #associations
  has_many :doses
  #validations
  validates :name, presence: true, uniqueness: true
end
