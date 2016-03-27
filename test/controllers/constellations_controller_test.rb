require 'test_helper'

class ConstellationsControllerTest < ActionController::TestCase
  setup do
    @constellation = constellations(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:constellations)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create constellation" do
    assert_difference('Constellation.count') do
      post :create, constellation: {  }
    end

    assert_redirected_to constellation_path(assigns(:constellation))
  end

  test "should show constellation" do
    get :show, id: @constellation
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @constellation
    assert_response :success
  end

  test "should update constellation" do
    patch :update, id: @constellation, constellation: {  }
    assert_redirected_to constellation_path(assigns(:constellation))
  end

  test "should destroy constellation" do
    assert_difference('Constellation.count', -1) do
      delete :destroy, id: @constellation
    end

    assert_redirected_to constellations_path
  end
end
