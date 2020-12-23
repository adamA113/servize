from django.urls import path
from User.views import UserList,sepUser
app_name='User'


urlpatterns=[
    path('',UserList.as_view()),
    path('specUser/',sepUser),

    # path('provideruser/',ProviderUserList.as_view())
 ]
