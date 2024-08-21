FROM python:latest

WORKDIR /portfolio/app

COPY . .
RUN pip install -r requirements.txt

ENV BOT_TOKEN=7235828288:AAGx5T_n4nJLKa5aewXQNeFR-FgSvoorJ3U
ENV DB_URI=mongodb://root:root@mongo:27017

EXPOSE 8000

CMD ["uvicorn", "app:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]
