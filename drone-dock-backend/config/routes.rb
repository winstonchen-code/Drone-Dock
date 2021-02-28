Rails.application.routes.draw do
  post "/login", to: "users#login"
  get "/me", to: "users#me"
  patch "/me", to: "users#update"

  get '/footagelogs', to: 'footage_logs#index' 

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
