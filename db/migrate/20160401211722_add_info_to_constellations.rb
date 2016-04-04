class AddInfoToConstellations < ActiveRecord::Migration
  def change
    add_column :constellations, :Info, :text
  end
end
