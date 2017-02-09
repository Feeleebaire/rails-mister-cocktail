class Dose < ApplicationRecord
  #associations
  belongs_to :ingredient
  belongs_to :cocktail
  #validations
  validates :description, presence: true
  #validates_uniqueness_of :cocktail_id, :scope => :ingredient_id
  validates :cocktail_id, uniqueness: { scope: :ingredient_id }
end
