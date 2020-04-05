Rails.application.routes.draw do
  root to: 'pages#home'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  devise_scope :user do
    get '/auth/facebook/callback' => 'users/omniauth_callbacks#facebook'
    get '/auth/linkedin/callback' => 'users/omniauth_callbacks#linkedin'

    resources :accounts
  end
end
