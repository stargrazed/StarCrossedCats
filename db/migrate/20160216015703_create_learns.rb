class CreateLearns < ActiveRecord::Migration
  def change
    create_table :learns do |t|

      t.timestamps
    end
  end
end
