class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.string :title
      t.text :description
      t.string :link
      t.integer :category_id

      t.timestamps
    end
  end
end
