Rails.application.routes.draw do
  resources :stop_overs, only: [:show, :create]
  resources :destinations, only: [:index, :show, :create]
  resources :trips, only: [:index, :show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
