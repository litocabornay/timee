class CreateMachines < ActiveRecord::Migration
  def change
    create_table :machines do |t|

      t.timestamps null: false
    end
  end
end
