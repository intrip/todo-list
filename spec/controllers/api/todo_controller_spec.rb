require 'rails_helper'

module Api
  describe TodoController, type: :request do
    describe '#index' do
      let(:action) { ->{get '/api/todo' }}
      before do
        action.call
      end
      it 'responds_with 200' do
        expect(response).to have_http_status 200
      end

      it 'returns the item list as json' do
        expect(response.body).to eq [@item_1].to_json
      end
    end

    describe '#create' do
      let(:action) { ->{post '/api/todo', data }}
      let(:data) { {title: "test item1", description: "test desc1", body: "test body1" }}
      context 'success' do
        it 'adds a new item' do
          expect { action.call }.to change { Item.count }.by(1)
        end

        it 'responds with 200' do
          action.call
          expect(response).to have_http_status 200
        end
      end

      context 'error' do
        xit 'responds with 422'
        xit 'responds with model errors'
      end
    end

    describe '#destroy' do
      let(:action) { ->{delete "/api/todo/#{id}" }}
      context 'item exists' do
        let(:id) { @item_1.id }
        it 'responds with 204' do
          action.call
          expect(response).to have_http_status 204
        end
        it 'removes the item' do
          expect{action.call}.to change{Item.count}.by -1
        end
      end
      context 'item does not exists' do
        let(:id) { 999 }
        it 'responds with 422' do
          action.call
          expect(response).to have_http_status 422
        end
        it "doesn't remove any item" do
          expect{action.call}.to_not change{Item.count}
        end
      end
    end
  end
end
