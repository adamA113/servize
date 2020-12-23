from rest_framework import serializers
from ServiceProvider.models import ServiceProvider,Image
from Category.models import Category
from User.serialize import ProviderUserSerializer
from schedule.models import Schedule
# from schedule.serialize import ScheduleSerializer

# class  CategoryProviderSerializer(serializers.ModelSerializer):
#     providerName = serializers.CharField(source='serviceProviderId.provider.name', read_only=True)
#     providerId=serializers.CharField(source='serviceProviderId.provider.id', read_only=True)
#     cateName=serializers.CharField(source='categoryId.catName', read_only=True)
#     cateId=serializers.CharField(source='categoryId.id', read_only=True)
#     categoryId = models.ForeignKey(Category, on_delete=models.CASCADE,default=1)

    
#     class Meta:
#         model=CategoryProvider
#         fields=['categoryId','serviceProviderId']




class  ServiceProviderSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='provider.name',read_only=True )
    email = serializers.CharField(source='provider',read_only=True )
    
    users= ProviderUserSerializer(many=True, read_only=True)
    catname= serializers.CharField(source='categoryId',read_only=True)
    reservations=serializers.CharField(source='schedule',read_only=True)

    # events= serializers.CharField(source='events',read_only=True)

    class Meta:
        model=ServiceProvider
        fields=('provider','name','email','phone','city','role','picture','users','catname','categoryId','reservations')
        # fields=('name','phone','city','picture','users','categoryId')







class  ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model=Image
        fields=('images','serviceProvider')




