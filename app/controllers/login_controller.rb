class LoginController < ApplicationController
  layout 'application'

  before_action :confirm_logged_in,
    :except => [:login, :attempt_login, :logout, :new_user, :create]

  def index
  end

  def login
  end

  def profile
    @user = User.find_by(id: session[:user_id])
  end

  def new_user
    @user = User.new
  end

  def attempt_login
    if params[:username].present? && params[:password].present?
      found = User.where(:username => params[:username]).first
      if found
        authorized_user = found.authenticate(params[:password])
      end
    end
    if authorized_user
      session[:user_id] = authorized_user.id
      session[:username] = authorized_user.username
      flash[:notice] = "Logged in as "+found.username
      redirect_to(:controller => 'welcome', :action => 'index')
    else
      flash[:notice] = "Invalid user or password."
      redirect_to(:action => 'login')
    end
  end

  def logout
    session[:user_id] = nil
    session[:username] = nil
    flash[:notice] = 'Logged out'
    redirect_to(:action=> 'login')
  end


  def create
    @user = User.new(user_params) #form parameters
    if @user.save
      flash[:notice] = "User successfully created!"
      redirect_to(:controller => "welcome", :action => 'index') #return on success
    else
      render('new_user') #fail to save
    end
  end

private
  def user_params
    params.require(:user).permit(:name, :username, :password, :password_confirmation)
  end

end
