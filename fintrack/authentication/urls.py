from .views import RegistrationView
from .views import *
from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators import *

urlpatterns = [
    path('register',RegistrationView.as_view(),name='register'),
    path('login',LoginView.as_view(),name='login'),
    path('username-validate',csrf_exempt(usernameValidation.as_view()),name='username-validate')
    
]
