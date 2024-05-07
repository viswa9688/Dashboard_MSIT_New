import csv
import smtplib
import os

from dotenv import load_dotenv

load_dotenv(verbose=True)
def user_exists(email):
    with open('./users/users.csv', mode='r', newline='') as file:
        reader = csv.reader(file)
        for row in reader:
            if row[0] == email:
                return True
    return False


def send_email(email, username):
    # Set up SMTP server
    smtp_server = "smtp.gmail.com"
    smtp_port = 587  # Update with your SMTP port
    smtp_username = os.environ.get('SMTP_USERNAME')
    smtp_password = os.environ.get('SMTP_PASSWORD')

    server = smtplib.SMTP(smtp_server, smtp_port)
    server.starttls()
    server.login(smtp_username, smtp_password)

    from_email = "jayakrishnad2002@gmail.com"
    to_email = email
    subject = "MSIT Dashboard"
    message = f"""
    Dear {username}
    Congratulations! You succesfully registed at MSIT Dashboard


    Thanks,
    MSIT Admin
    """

    text = f'Subject: {subject}\n\n{message}'

    # Send email
    server.sendmail(from_email, to_email, text)

    # Disconnect from the SMTP server
    server.quit()
