class Users < ActiveRecord::Base
  validates_presence_of :name, :message => "please enter a username"
  validates_length_of :name, :maximum => 20, :minimum => 4, :message => "name must
  be within 4 and 20 characters"
  validates_presence_of :pass, :message => "please enter a password between 4 and 25 characters"
  validates_length_of :pass, :within => 4..25, :message => "password must be within 4 and 25 characters"
  validates_uniqueness_of :name
end
