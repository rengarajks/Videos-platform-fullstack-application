from django.urls import path
from .views import VideoView,SingleVideoView

urlpatterns=[

    path('video/',VideoView.as_view()),
    path('video/<int:pk>',SingleVideoView.as_view()),



]