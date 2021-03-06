require 'rails_helper'

module Api
  describe TodoController, type: :request do
  before do
    Warden.test_mode!
    login_as(@user_1)
  end
  describe '#index' do
    let(:action) { ->{get '/api/todo' }}
    before do
      action.call
    end
    it 'responds_with 200' do
      expect(response).to have_http_status 200
    end

    it 'returns the item list of the current user as json' do
      expect(response.body).to eq [@item_1, @item_2].to_json
    end

    describe 'filter parameter' do
      let(:action) { ->{get "/api/todo?#{filter}" }}
      describe 'filter by complete status' do
        context 'completed' do
          let(:filter) {'filter[completed]=true'}
          it 'returns all completed items' do
            expect(response.body).to eq [@item_2].to_json
          end
        end
        context 'not completed' do
          let(:filter) {'filter[completed]=false'}
          it 'returns the not completed items' do
            expect(response.body).to eq [@item_1].to_json
          end
        end
      end
    end
  end

  describe '#create' do
    let(:action) { ->{post '/api/todo', data }}
    let(:data) { {title: "test item1", description: "test desc1", body: "test body1" }}
    context 'success' do
      it 'adds a new item' do
        expect { action.call }.to change { Item.count }.by(1)
      end

      it 'creates an item associated to the current user' do
        action.call
        expect(parseResponse["user_id"]).to eq(@user_1.id)
      end

      it 'responds with 200' do
        action.call
        expect(response).to have_http_status 200
      end
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
        expect { action.call }.to change { Item.count }.by -1
      end
    end
    context 'item does not exists' do
      let(:id) { 999 }
      it 'responds with 422' do
        action.call
        expect(response).to have_http_status 422
      end
      it "doesn't remove any item" do
        expect { action.call }.to_not change { Item.count }
      end
    end
  end

  describe '#update' do
    let(:action) { ->{put "/api/todo/#{id}", {title: "new title", description: "new_description", body: "new body" }}}
    context 'item does not exists' do
      let(:id) { 999 }
      it 'responds_with 404' do
        action.call
        expect(response).to have_http_status 404
      end
    end
    context 'item exists' do
      let(:id) { @item_1.id }
      it 'responds_with 200' do
        action.call
        expect(response).to have_http_status 200
      end
      it 'returns the item updated' do
        action.call
        expect(parseResponse).to include({"title" => "new title", "description" => "new_description", "body" => "new body"})
      end
      it 'updates the item attributes' do
        action.call
        expect(@item_1.reload.attributes).to include({"title" => "new title", "description" => "new_description", "body" => "new body"})
      end
    end
  end
end
end
