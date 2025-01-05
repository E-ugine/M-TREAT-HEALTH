from django.urls import path
from .views import RegisterView

urlpatterns = [
    path('auth/register/', RegisterView.as_view(), name='register'),
    # path('auth/login/', LoginView.as_view(), name='login'),
    # path('patient/', PatientDetailView.as_view(), name='patient-detail'),
]
