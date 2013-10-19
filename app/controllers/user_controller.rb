class UserController < ApplicationController
    def create

        email = params[:email]
        password = params[:password]

        @user = User.new({:email=>email, :password => password, :active => 1})

        if @user.save
            status = 1
        else
            status = 0
        end

        render :json => {:status => status}
    end
end
