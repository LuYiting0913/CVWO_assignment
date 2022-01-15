Rails.application.routes.draw do

  root "pages#index"  

  namespace :api, defaults: {format: :json} do
    namespace :v1 do 
      resources :subjects
      resources :students do
        resources :grades
      end
    end
  end

  
  
  get "*path", to: "pages#index", via: :all
end
