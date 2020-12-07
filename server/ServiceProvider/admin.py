from django.contrib import admin
from ServiceProvider.models import ServiceProvider,CategoryProvider,Image

# Register your models here.
admin.site.register(ServiceProvider)
admin.site.register(CategoryProvider)
admin.site.register(Image)