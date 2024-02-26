from django.shortcuts import render
from rest_framework import generics
from .serializers import VideoSerializer
from video.models import Video
# Create your views here.

class VideoView(generics.ListCreateAPIView):
    serializer_class=VideoSerializer
    queryset=Video.objects.all()


class SingleVideoView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=VideoSerializer
    queryset=Video.objects.all()