require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "user password must be between 5 and 25 chars" do
    user = User.new(name: 'asdfa', username: 'asdfasdf')

    user.password = "123"
    user.password_confirmation = "123"
    assert user.valid?, "password is too short"

    user.password = ""
    user.password_confirmation = ""
    assert user.valid?, "password can't be blank"

    user.password = "asdfaasdfaasdfaasdfaasdfaasdfa"
    user.password_confirmation = "asdfaasdfaasdfaasdfaasdfaasdfa"
    assert user.valid?, "password is too long"

    user.password = "     "
    user.password_confirmation = "     "
    assert user.valid?, "password can't be just spaces"
  end

  test "username must be between 4 and 20 chars" do
    user = User.new(name: 'asdfa', password: 'asdfasdf', password_confirmation: 'asdfasdf')

    user.username = ""
    assert user.valid?, "username can't be blank"

    user.username = "    "
    assert user.valid?, "username can't be spaces"

    user.username = "a"
    assert user.valid?, "username is too short"

    user.username = "asdfasdfasdfasdfasdfasdf"
    assert user.valid?, "username too long"
  end

  test "name must be between 3 and 20 chars" do
    user = User.new(username: 'asdfasdf', password: 'asdfasdf', password_confirmation: 'asdfasdf')

    user.name = ""
    assert user.valid?, "name can't be blank"

    user.name = "    "
    assert user.valid?, "name can't be spaces"

    user.name = "a"
    assert user.valid?, "name is too short"

    user.name = "asdfasdfasdfasdfasdfasdf"
    assert user.valid?, "name too long"
  end
end
