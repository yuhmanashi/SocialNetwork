class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
          params[:user][:email], 
          params[:user][:password]
        )
        if @user
          login!(@user)
          redirect_to api_user_url(@user)
        else
          render json: ['Wrong email and/or password'], status: 401
        end
    end
    
    def destroy
      @user = current_user
      if @user
        logout!
        render json: {}
      else
        render json: ['No one is signed in'], status: 404
      end
    end
end