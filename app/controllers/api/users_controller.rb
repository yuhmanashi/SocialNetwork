class Api::UsersController < ApplicationController
    def show
        @user = User.find(params[:id])
        render 'api/users/show'
    end
      
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 401
        end
    end
      
    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 401
        end
    end
  
    private
        def user_params
            params.require(:user).permit(:first_name, :last_name, :email, :password)
        end
  end