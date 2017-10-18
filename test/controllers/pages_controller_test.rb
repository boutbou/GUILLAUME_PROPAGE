require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get semelles" do
    get pages_semelles_url
    assert_response :success
  end

  test "should get podologie" do
    get pages_podologie_url
    assert_response :success
  end

  test "should get sport" do
    get pages_sport_url
    assert_response :success
  end

  test "should get orthoplasties" do
    get pages_orthoplasties_url
    assert_response :success
  end

  test "should get pedicurie" do
    get pages_pedicurie_url
    assert_response :success
  end

  test "should get soins" do
    get pages_soins_url
    assert_response :success
  end

  test "should get tarifs" do
    get pages_tarifs_url
    assert_response :success
  end
end
