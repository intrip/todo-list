class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title
      t.string :description
      t.string :body
      t.timestamp :due_date

      t.timestamps null: false
    end
  end
end
