from rest_framework.authentication import TokenAuthentication
from rest_framework.exceptions import AuthenticationFailed
from .models import PatientToken

class PatientTokenAuthentication(TokenAuthentication):
    def authenticate_credentials(self, key):
        try:
            token = PatientToken.objects.select_related('patient').get(key=key)
        except PatientToken.DoesNotExist:
            raise AuthenticationFailed('Invalid token.')

        # Set the authenticated patient
        return (token.patient, token)
    
