import django_filters
from ServiceProvider.models import ServiceProvider


class ServiceProviderFilter(django_filters.FilterSet):
    # name = django_filters.CharFilter(lookup_expr='iexact')
    class Meta:
        model = ServiceProvider
        fields = '__all__'
