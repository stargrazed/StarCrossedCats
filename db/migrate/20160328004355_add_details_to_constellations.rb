class AddDetailsToConstellations < ActiveRecord::Migration
  def change
    add_column :constellations, :Constellation, :string
    add_column :constellations, :Abbreviation, :string
    add_column :constellations, :Family, :string
    add_column :constellations, :Origin, :string
    add_column :constellations, :Meaning, :string
    add_column :constellations, :Brightest_star, :string
    add_column :constellations, :Image, :string
  end
end
