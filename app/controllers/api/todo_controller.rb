module Api
  class TodoController < ApiController
    def index
      render json: Item.all
    end

    def create
      if item = Item.create(item_attributes)
        render json: item, status: 200
      else
        render json: item.errors.messages, status: 422
      end
    end

    def update
      begin
        item = Item.find(params[:id]).tap{|item| item.update(item_attributes)}
        render json: item, status: 200
      rescue ActiveRecord::RecordNotFound => e
        render nothing: true, status: 404
      end
    end

    def destroy
      begin
        Item.find(params[:id]).destroy
        render nothing: true, status: 204
      rescue ActiveRecord::RecordNotFound => e
        render nothing: true, status: 422
      end
    end

    def item_attributes
      params.permit(:title, :description, :body, :order, :completed, :due_date)
    end
  end
end
