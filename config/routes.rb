Rails.application.routes.draw do
  
  resources :jobs, only: [:index, :create]
  resources :job_applications, only: [:create, :index, :update, :destroy]
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

  get "/user_applications/:n", to: "users#user_applications"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
