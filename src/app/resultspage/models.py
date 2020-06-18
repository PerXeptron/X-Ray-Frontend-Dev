from django.db import models

class QuestionBank(models.Model):
    question=models.CharField(max_length=700)
    option1=models.CharField(max_length=400)
    option2=models.CharField(max_length=400)
    option3=models.CharField(max_length=400)
    option4=models.CharField(max_length=400)
    tag=models.CharField(max_length=1)#either m for mcq or n for numerical
    numanswer=models.CharField(max_length=20)
    mcqanswer=models.CharField(max_length=400)
