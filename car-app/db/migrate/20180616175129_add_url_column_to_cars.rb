class AddUrlColumnToCars < ActiveRecord::Migration[5.1]
  def up
  	add_column :cars, :picture, :string
  end

  def down
  	add_column :cars, :picture, :string
  end
end
