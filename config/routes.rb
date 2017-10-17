Rails.application.routes.draw do
  get 'pages/tarifs'

  get 'pages/semelles'

  get 'pages/podologie'

  get 'pages/sport'

  get 'pages/orthoplasties'

  get 'pages/pedicurie'

  get 'pages/rdv'

  get 'pages/home'

  get 'pages/soins'

  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
