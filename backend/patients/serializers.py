from rest_framework import serializers
from .models import Patient, PatientToken
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['id', 'name', 'email', 'phone', 'password']
        extra_kwargs = {
            'password': {'write_only': True}, 
        }

    def create(self, validated_data):
        # Hash the password before saving the patient
        password = validated_data.pop('password')
        patient = Patient(**validated_data)
        patient.set_password(password)  
        patient.save()
        return patient

    def update(self, instance, validated_data):
        if 'password' in validated_data:
            instance.set_password(validated_data.pop('password'))
        return super().update(instance, validated_data)


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)

    class Meta:
        model = Patient
        fields = ['name', 'email', 'phone', 'password', 'password_confirmation']

    def validate(self, data):
        if data['password'] != data['password_confirmation']:
            raise serializers.ValidationError({"password": "Passwords do not match."})
        return data

    def create(self, validated_data):
        validated_data.pop('password_confirmation')
        return PatientSerializer.create(self, validated_data)


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    token = serializers.CharField(read_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        try:
            patient = Patient.objects.get(email=email)
        except Patient.DoesNotExist:
            raise serializers.ValidationError({"detail": "Invalid credentials."})

        if not patient.check_password(password):
            raise serializers.ValidationError({"detail": "Invalid credentials."})

        # Get or create a token for the patient
        token, created = PatientToken.objects.get_or_create(patient=patient)
        data['token'] = token.key
        return data
