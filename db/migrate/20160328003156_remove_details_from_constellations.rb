class RemoveDetailsFromConstellations < ActiveRecord::Migration
  def change
    remove_column :constellations, :constellation, :string
    remove_column :constellations, :abbreviation, :string
    remove_column :constellations, :family, :string
    remove_column :constellations, :origin, :string
    remove_column :constellations, :meaning, :string
    remove_column :constellations, :brightest_star, :string
    remove_column :constellations, :image, :string
  end
end
