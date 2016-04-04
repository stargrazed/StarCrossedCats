class CreateConstellations < ActiveRecord::Migration
  def change
    create_table :constellations do |t|

      t.timestamps
    end
  end
end
