class RemoveStringsFromBases < ActiveRecord::Migration[5.0]
  def change
    remove_column :cocktails, :string
    remove_column :doses, :string
    remove_column :ingredients, :string
  end
end
