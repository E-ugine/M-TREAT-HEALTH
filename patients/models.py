from django.db import models
from django.contrib.auth.hashers import make_password, check_password
import binascii
import os

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

class PatientToken(models.Model):
    patient = models.OneToOneField(Patient, on_delete=models.CASCADE, related_name="token")
    key = models.CharField(max_length=40, unique=True)
    created = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.key:
            self.key = self.generate_key()
        return super().save(*args, **kwargs)

    @staticmethod
    def generate_key():
        return binascii.hexlify(os.urandom(20)).decode()

    def __str__(self):
        return f"Token for {self.patient.name}"


# Create a token for each patient when they are created
from django.db.models.signals import post_save
from django.dispatch import receiver

@receiver(post_save, sender=Patient)
def create_patient_token(sender, instance, created, **kwargs):
    if created:
        PatientToken.objects.create(patient=instance)
