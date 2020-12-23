import django_filters
from Category.models import Category


class CategoryFilter(django_filters.FilterSet):
    # name = django_filters.CharFilter(lookup_expr='iexact')
    class Meta:
        model = Category
        fields = '__all__'
