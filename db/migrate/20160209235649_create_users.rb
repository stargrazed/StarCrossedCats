class CreateUsers < ActiveRecord::Migration

  def up
    create_table :users do |t|
      t.column "username", :string, :limit => 20
      t.column "name", :string, :limit => 20
      t.column "password", :string, :limit => 25
      t.timestamps
    end
  end

  def down
    drop_table :users
  end

end
