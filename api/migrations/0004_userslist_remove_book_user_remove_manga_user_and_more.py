# Generated by Django 4.0 on 2022-01-04 05:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_remove_book_user_remove_manga_user_delete_anime_and_more'),
        ('api', '0003_alter_anime_dropped_alter_anime_finished_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='UsersList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('books', models.JSONField(default={'dropped': ['this', 'is', 'the', 'finished', 'list'], 'finished': ['this', 'is', 'the', 'finished', 'list'], 'unfinished': ['this', 'is', 'the', 'finished', 'list'], 'watchlist': ['this', 'is', 'the', 'finished', 'list']})),
                ('anime', models.JSONField(default={'dropped': ['this', 'is', 'the', 'finished', 'list'], 'finished': ['this', 'is', 'the', 'finished', 'list'], 'unfinished': ['this', 'is', 'the', 'finished', 'list'], 'watchlist': ['this', 'is', 'the', 'finished', 'list']})),
                ('manga', models.JSONField(default={'dropped': ['this', 'is', 'the', 'finished', 'list'], 'finished': ['this', 'is', 'the', 'finished', 'list'], 'unfinished': ['this', 'is', 'the', 'finished', 'list'], 'watchlist': ['this', 'is', 'the', 'finished', 'list']})),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.user')),
            ],
        ),
        migrations.RemoveField(
            model_name='book',
            name='user',
        ),
        migrations.RemoveField(
            model_name='manga',
            name='user',
        ),
        migrations.DeleteModel(
            name='Anime',
        ),
        migrations.DeleteModel(
            name='Book',
        ),
        migrations.DeleteModel(
            name='Manga',
        ),
    ]
