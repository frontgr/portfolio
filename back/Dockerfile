FROM python:latest

WORKDIR /portfolio

ENV FLASK_APP=/portfolio/back/app/app
ENV FLASK_RUN_HOST=0.0.0.0

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY .. /portfolio//back
CMD ["flask", "run"]
