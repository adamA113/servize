# Generated by Django 3.1.4 on 2020-12-15 12:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Reviews', '0001_initial'),
        ('ServiceProvider', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='reviews',
            name='servicProvider',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ServiceProvider.serviceprovider'),
        ),
    ]