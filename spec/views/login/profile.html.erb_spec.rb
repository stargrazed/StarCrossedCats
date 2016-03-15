require 'spec_helper'

describe 'login/profile.html.erb' do
  it 'display correct user profile' do
    assign(:login, User.create(name: 'Jane')

    render

    rendered.should have_selector("table#login_#{@user.name} tbody tr:nth-of-type(1) td:nth-of-type(1)", text:'Jane')
  end

end
