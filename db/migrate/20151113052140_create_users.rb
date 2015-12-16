class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :artist_name
      t.string :email
      t.string :password_digest
      t.string :current_city
      t.string :slug

      t.timestamps null: false
    end
  end
end
