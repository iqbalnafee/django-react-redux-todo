from django.db import models

# Create your models here.


class Todo(models.Model):  # model name should be start with capital letter
    task = models.CharField(max_length=1000)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.task
