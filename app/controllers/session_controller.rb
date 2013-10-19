class SessionController < ApplicationController
  
    def login

        user = User.find_by_email(params[:email])

        if user && user.authenticate(params[:password])

            session[:user_id] = user.id

            render :json => {:status => 1}

        else
            render :json => {:status => 0}
        end

    end

    def authorized
        
        render :json => {:authorized => !session[:user_id].nil?}
    end

    def destroy
        session[:user_id] = nil

        render :json => {:status => 1}
    end

end
