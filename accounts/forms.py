from django.contrib.auth.forms import UserCreationForm
from django.forms.widgets import PasswordInput, TextInput

from .models import User


class RegistrationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ["username", "password1", "password2"]
        widgets = {
            "username": TextInput(attrs={"placeholder": "Username"}),
        }

    def __init__(self, *args, **kwargs) -> None:
        super(RegistrationForm, self).__init__(*args, **kwargs)
        self.fields["password1"].widget = PasswordInput(attrs={"placeholder": "Password"})
        self.fields["password2"].widget = PasswordInput(attrs={"placeholder": "Confirm password"})