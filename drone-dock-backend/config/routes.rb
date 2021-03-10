Rails.application.routes.draw do
  post "/login", to: "users#login"
  get "/me", to: "users#me"
  patch "/me", to: "users#update"
  post "/signup", to: "users#signup"
  get '/users/:id', to: 'users#show' 
  get '/users', to: 'users#index' 
  delete '/users/:id', to: 'users#destroy'

  post "/footage_logs", to: 'footage_logs#create'
  get '/footage_logs', to: 'footage_logs#index' 
  get '/footage_logs/:id', to: 'footage_logs#show'
  patch "/footage_logs/:id", to: "footage_logs#update"
  delete '/footage_logs/:id', to: 'footage_logs#destroy'

  get '/videos/:id', to: 'videos#show'
  delete '/videos/:id', to: 'videos#destroy'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
