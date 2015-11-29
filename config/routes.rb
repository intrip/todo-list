Rails.application.routes.draw do
  get '/' => 'todo#index'

  namespace :api do
    resources 'todo', only: [:index, :create, :update, :destroy]
  end
end
