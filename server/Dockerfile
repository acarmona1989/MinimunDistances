FROM python:3.8.1-alpine
WORKDIR /appserver
ENV FLASK_APP app.py
ENV FLASK_RUN_HOST 0.0.0.0
RUN apk add --no-cache gcc musl-dev linux-headers
COPY requirements.txt /appserver/requirements.txt
RUN pip install -r requirements.txt
COPY . /appserver
CMD ["flask", "run"]