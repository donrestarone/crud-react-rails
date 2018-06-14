class ApplicationController < ActionController::Base
  # api controller, no session object.
  protect_from_forgery with: :null_session
end
