FROM python:latest

WORKDIR /portfolio/bot

COPY .. .
RUN pip install -r requirements.txt

CMD ["python", "bot.py"]