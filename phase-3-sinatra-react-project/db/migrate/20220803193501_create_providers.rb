class CreateProviders < ActiveRecord::Migration[6.1]
  def change
    create_table :providers do |t|
    t.string :name
    t.string :practice_type
    t.string :image_url    
    t.string :bio
    t.string :languages
    end
  end
end
