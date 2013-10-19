class User < ActiveRecord::Base
  attr_accessible :active, :email, :password

  has_secure_password
  validates_presence_of :password, :on => :create
end
