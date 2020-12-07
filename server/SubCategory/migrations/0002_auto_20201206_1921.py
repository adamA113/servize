# Generated by Django 3.1.4 on 2020-12-06 17:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SubCategory', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='subcategory',
            name='imageCat',
        ),
        migrations.RemoveField(
            model_name='subcategory',
            name='subCatName',
        ),
        migrations.AddField(
            model_name='subcategory',
            name='subImage',
            field=models.CharField(default='you should put url for your image', max_length=256),
        ),
        migrations.AddField(
            model_name='subcategory',
            name='subName',
            field=models.CharField(default='sub category name ', max_length=50),
        ),
    ]