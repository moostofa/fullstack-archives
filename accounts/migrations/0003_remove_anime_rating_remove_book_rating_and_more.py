# Generated by Django 4.0 on 2021-12-13 01:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_alter_anime_dropped_alter_anime_finished_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='anime',
            name='rating',
        ),
        migrations.RemoveField(
            model_name='book',
            name='rating',
        ),
        migrations.RemoveField(
            model_name='manga',
            name='rating',
        ),
    ]