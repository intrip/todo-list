Rails.application.routes.draw do
  root to: 'todo#index'

  get '/' => 'todo#index'

  namespace :api do
    resources 'todo', only: [:index, :create, :update, :destroy]
  end
end
