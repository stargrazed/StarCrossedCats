class AddDetailsToFact < ActiveRecord::Migration
  def change
    add_column :facts, :constellation, :string
    add_column :facts, :abbreviation, :string
    add_column :facts, :family, :string
    add_column :facts, :origin, :string
    add_column :facts, :meaning, :string
    add_column :facts, :brightest_star, :string
    add_column :facts, :image, :string
  end
end
