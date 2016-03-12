require 'test_helper'

class LoginControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success, @response.body
  end

  test "should get login" do
    get :login
    assert_response :success, @response.body
  end


end
