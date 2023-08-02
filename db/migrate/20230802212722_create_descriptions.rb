class CreateDescriptions < ActiveRecord::Migration[6.1]
  def change
    create_table :descriptions do |t|
      t.float :pay
      t.string :location
      t.string :position
      t.string :company

      t.timestamps
    end
  end
end
