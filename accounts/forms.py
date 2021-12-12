from django.forms import Form
from django.forms.fields import CharField
from django.forms.forms import Form
from django.forms.widgets import PasswordInput, TextInput

class LoginForm(Form):
    username = CharField(label = "", max_length=56, 
        widget=TextInput(attrs={"placeholder": "Username"})
    )
    password = CharField(label = "", max_length=20, 
        widget=PasswordInput(attrs={"placeholder": "Password"})
    )

class RegistrationForm(LoginForm):
    confirm_password = CharField(label = "", max_length=20, 
        widget=PasswordInput(attrs={"placeholder": "Confirm password"})
    )
