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

    def destroy

    end

    def item_attributes
      params.permit(:title, :description, :body, :order, :completed, :due_date)
    end
  end
end
