from rest_framework import viewsets

from .serializers import TodoSerializer
from todo.models import Todo


class TodoViewSet(viewsets.ModelViewset):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
