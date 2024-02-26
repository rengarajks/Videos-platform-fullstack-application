from django.db import models
from django.contrib.auth.models import User

class Video(models.Model):
    Title=models.CharField(max_length=120)
    Video=models.FileField(upload_to='uploaded_videos')
    creator=models.ForeignKey(User,on_delete=models.CASCADE)
    Views=models.IntegerField()
    Likes=models.IntegerField()
    Dislikes=models.IntegerField()
    Description=models.CharField(max_length=10000,default='')
    Published_at=models.DateTimeField(auto_now_add=True)
    