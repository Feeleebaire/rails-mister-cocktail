Rails.application.routes.draw do
  resources :cocktails, only: [:index, :new, :create, :show, :destroy, :update] do
    resources :doses, only: [:new, :create]
  end
  resources :doses, only: [:destroy]
end
