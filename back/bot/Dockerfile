FROM python:latest

WORKDIR /portfolio/bot

COPY .. .
RUN pip install -r requirements.txt

ENV BOT_TOKEN=7235828288:AAGx5T_n4nJLKa5aewXQNeFR-FgSvoorJ3U
ENV DB_URI=mongodb://root:root@mongo:27017
ENV ADMIN_I=6699340390
ENV ADMIN_K=7014073360
ENV ADMIN_E=5094982410

CMD ["python", "bot.py"]