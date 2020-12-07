from django.urls import path
from SubCategory.views import SubCategoryList

app_name='SubCategory'


urlpatterns=[
    path('',SubCategoryList.as_view()),
    
 ]
