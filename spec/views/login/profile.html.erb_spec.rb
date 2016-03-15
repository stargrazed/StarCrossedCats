require 'spec_helper'

describe 'login/profile.html.erb' do
  it 'display correct user profile' do
    assign(:login,[
      stub_model(User, :name => "Jane")
    ])

    render

    rendered.should contain("Jane")
  end

end
