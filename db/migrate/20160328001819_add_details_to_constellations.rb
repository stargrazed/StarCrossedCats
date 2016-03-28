class AddDetailsToConstellations < ActiveRecord::Migration
  def change
    add_column :constellations, :constellation, :string
    add_column :constellations, :abbreviation, :string
    add_column :constellations, :family, :string
    add_column :constellations, :origin, :string
    add_column :constellations, :meaning, :string
    add_column :constellations, :brightest_star, :string
    add_column :constellations, :image, :string
  end
end
