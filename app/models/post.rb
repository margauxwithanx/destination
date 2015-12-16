class Post < ActiveRecord::Base
	belongs_to :user
	belongs_to :city
	has_many :comments, dependent: :destroy

	validates :title, presence: true
	validates :content, presence: true, length: { in: 1..200 } 

	acts_as_taggable

end


