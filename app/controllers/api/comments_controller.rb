class Api::CommentsController < ApplicationController
    def index
        @comments = Comment.all
        render :index
    end

    def show
        @comment = Comment.find_by(id: params[:id])
        render :show
    end

    def create
        @comment = Comment.new(comment_params)

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 401
        end
    end

    def update
        @comment = Comment.find(params[:id])

        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 401
        end
            
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        if @comment
            @comment.destroy
            render json: {}
        else
            render json: ["This is not your comment"], status: 404
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :post_id, :author_id, :parent_comment_id)
    end
end