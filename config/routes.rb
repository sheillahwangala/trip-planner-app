Rails.application.routes.draw do
  resources :users
  resources :destinations, only: [:index, :show, :create, :destroy]
  resources :trips, only: [:index, :show, :create, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
