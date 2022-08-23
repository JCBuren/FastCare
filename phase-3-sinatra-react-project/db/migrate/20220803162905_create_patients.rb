class CreatePatients < ActiveRecord::Migration[6.1]
  def change
    create_table :patients do |t|
      t.string :firstname
      t.string :lastname
      t.string :dob
      t.string :email
      t.string :location
    end
  end
end
