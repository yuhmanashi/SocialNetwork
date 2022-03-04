Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show, :update]
    resources :friends, only: [:index, :create, :update, :destroy]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
