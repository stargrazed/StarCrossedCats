class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  private
  def confirm_logged_in
    unless session[:user_id]
      flash[:notice] = "You must be logged in to access this page"
      redirect_to(:controller => 'login', :action => 'login')
      return false
    else
      return true
    end
  end
  
end
