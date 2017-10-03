require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get rdv" do
    get pages_rdv_url
    assert_response :success
  end

  test "should get soins" do
    get pages_soins_url
    assert_response :success
  end

  test "should get home" do
    get pages_home_url
    assert_response :success
  end

end
