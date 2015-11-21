# json.array! @posts, partial: 'api/users/post', as: :post
#
# json.array!.push(@user)

json.extract! @user, :id, :username, :body
follow_status = current_user.is_following?(@user) ? "unfollow" : "follow"

if @posts
    json.follow_status follow_status
    json.profile_picture asset_path(@user.user_pic.url(:thumb))
    json.posts @posts.reverse, partial: 'api/users/post', as: :post
end
