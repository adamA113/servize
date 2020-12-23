from django.urls import path
from Category.views import CategoryList, JustCategoryList, ProvCat
from rest_framework.urlpatterns import format_suffix_patterns

app_name = 'Category'


urlpatterns = [
    path('', CategoryList.as_view()),
    path('just/', JustCategoryList.as_view()),
    path('providers/', ProvCat)
]
urlpatterns = format_suffix_patterns(urlpatterns)
