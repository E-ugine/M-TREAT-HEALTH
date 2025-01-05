from django.db import models
from django.contrib.auth.hashers import make_password, check_password

class Patient(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)
    password = models.CharField(max_length=128) 

    def set_password(self, raw_password):
        """Hash the password before storing it."""
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        """Verify the given password against the stored hash."""
        return check_password(raw_password, self.password)

    def __str__(self):
        return self.name
