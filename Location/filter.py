import django_filters
from Location.models import City


class CityFilter(django_filters.FilterSet):
    # name = django_filters.CharFilter(lookup_expr='iexact')
    class Meta:
        model = City
        fields = '__all__'
