class Api::SessionsController < ApplicationController

  def create
    username = user_params[:username]
    password = user_params[:password]

    @user = User.find_by_credentials(username, password)
    if @user
      log_in(@user)
      render :show
    else
      render json: ['Invalid Username/Password'], status: 422
    end

  end

  def destroy
    if current_user
      log_out
      render json: {}
    else
      render json: {}, status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
