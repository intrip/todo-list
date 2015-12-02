Rails.application.routes.draw do
  root to: 'todo#index'

  get '/' => 'todo#index'

  devise_for :users

  namespace :api do
    resources 'todo', only: [:index, :create, :update, :destroy]
  end
end
