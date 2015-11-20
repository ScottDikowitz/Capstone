class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render "api/user/show"
    else
      render json: {}
    end

  end

  def index
    @users = User.all
    render json: @users.to_json
  end

  def show

    @user = User.find_by(username: params[:id])
    @posts = @user.posts
    render :show
  end

  private
  def user_params
    self.params.require(:user).permit(:username, :password, :body)
  end

end
