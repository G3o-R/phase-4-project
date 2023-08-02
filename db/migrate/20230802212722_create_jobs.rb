class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :description
      t.float :pay
      t.string :location
      t.string :position
      t.string :company

      t.timestamps
    end
  end
end
