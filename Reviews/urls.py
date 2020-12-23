from django.urls import path
from Reviews.views import ReviewsList

app_name='Reviews'


urlpatterns=[
    path('',ReviewsList.as_view()),
    
 ]
