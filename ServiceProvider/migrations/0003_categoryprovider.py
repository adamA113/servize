# Generated by Django 3.1.4 on 2020-12-20 20:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ServiceProvider', '0002_auto_20201215_1444'),
    ]

    operations = [
        migrations.CreateModel(
            name='CategoryProvider',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('serviceProvider', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Categories', to='ServiceProvider.serviceprovider')),
            ],
        ),
    ]
