class User < ActiveRecord::Base
  has_secure_password

#  validates_presence_of :name
#  validates_length_of :name, :maximum => 20, :minimum => 4, :message => "name must
#  be within 4 and 20 characters"
#  validates_presence_of :password, :message => "please enter a password between 4 and 25 characters"
#  validates_length_of :password, :within => 4..25, :message => "Password must be within 4 and 25 characters"
#  validates_confirmation_of :password
#  validates_uniqueness_of :name , :message => "This username is already taken!"

validates :name, :presence => true,
  :length => {:within => 3..20, :message => "name must be within 3 and 20 characters"}

validates :username, :presence => true,
  :length => {:within => 4..20},
  :uniqueness => true

validates :password,
  :length => {:within => 5..25}
end
