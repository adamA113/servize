
from django.contrib import admin
from django.urls import path,include,re_path
from django.views.generic import TemplateView

urlpatterns = [
    
    path('admin/', admin.site.urls),
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
    path('category/',include('Category.urls')),
    path('location/',include('Location.urls')),
    path('reviews/',include('Reviews.urls')),
    path('user/',include('User.urls')),
    path('serviceprovider/',include('ServiceProvider.urls')),
    path('auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.authtoken')),
    path('auth/token/login/', include('djoser.urls')),           #login
    path('auth/token/logout/', include('djoser.urls')),           #logout  
    path('/auth/users/me/', include('djoser.urls')),    # user profile 
    path('auth/', include('djoser.urls.jwt')),                         # to handle token 
    path('auth/users/', include('djoser.urls')),                       #Use this endpoint to register new user
    path('auth/users/activation/', include('djoser.urls')),            #Use this endpoint to activate user account. This endpoint is not a URL which will be directly exposed to your users - you should provide site in your frontend application (configured by ACTIVATION_URL) which will send POST request to activate endpoint
    path('auth/jwt/create/', include('djoser.urls')),     #login             # Use this endpoint to obtain JWT.
    path('auth/users/reset_password/', include('djoser.urls')),    #Use this endpoint to send email to user with password reset link. 
                                                                     #You have to setup PASSWORD_RESET_CONFIRM_URL.

    path('auth/users/reset_password_confirm/', include('djoser.urls')),  #Use this endpoint to finish reset password process
   
    path('calender/', include('schedule.urls')), 
                                       # add urls for calender app

]
