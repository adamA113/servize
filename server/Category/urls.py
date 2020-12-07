from django.urls import path
from Category.views import CategoryList

app_name='Category'


urlpatterns=[
    path('',CategoryList.as_view())
 ]
