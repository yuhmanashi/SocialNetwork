class Api::LikesController < ApplicationController
    def index
        @likes = Like.all
        render :index
    end

    def create
        @like = Like.new(like_params)

        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 401 
        end
    end

    def destroy
        @like = Like.find_by(id: params[:id])

        if @like
            @like.destroy
            render json: {}
        else
            render json: ["Like not found"], status: 404
        end
    end

    private

    def like_params
        params.require(:like).permit(:user_id, :post_id, :comment_id, :liked)
    end
end