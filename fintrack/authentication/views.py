from django.shortcuts import render
from django.views import View
import json
from django.http import JsonResponse
from django.contrib.auth.models import User

# Create your views here.


class RegistrationView(View):
    def get(self, request):
        return render(request,'authentication/register.html')
    
    
class usernameValidation(View):
    def post(self, request):
        data = json.loads(request.body)
        username = data.username

        if not str(username).isalnum():
            return JsonResponse({'usernameError':'Username should only contain alpha numeric characters.'},status=400)
        
        if User.objects.filter(username=username).exists():
            return JsonResponse({'usernameError':'Username already taken, choose another one!'},status=409)
        
        
        return JsonResponse({'usernameValid':True})
    
    
class LoginView(View):
    def get(self, request):
        return render(request,'authentication/login.html')
    
