class CreateGrades < ActiveRecord::Migration[6.1]
  def change
    create_table :grades do |t|
      t.string :code
      t.string :score
      t.references :student, null: false, foreign_key: true

      t.timestamps
    end
  end
end
