from os import environ

from pymongo import MongoClient

from fastapi import FastAPI, Response, status
from pydantic import BaseModel, EmailStr

from aiogram import Bot

bot_token = environ['BOT_TOKEN']
db_uri = environ['DB_URI']

client = MongoClient(db_uri)
db = client.Portfolio

app = FastAPI()
bot = Bot(token=bot_token)

class RequestModel(BaseModel):
    name: str
    phone: str
    email: EmailStr
    type: str
    pageCount: int
    design: bool
    bot: bool
    comment: str

@app.post('/notify')
async def notify(data: RequestModel):
    for id in db.receivers.find():
        await bot.send_message(
            chat_id=id['tg_id'], 
            text=f'''
            Новое уведомление 🔔\n\nИмя: {data.name}\nТел.: {data.phone}\nПочта: {data.email}\n\nТип заказа: {data.type}\nКол-во страниц: {data.pageCount}\nДизайн: {'Да' if data.design else 'Нет'}\nТГ бот: {'Да' if data.bot else 'Нет'}\n\nКомментарий: \n{data.comment}
            ''')

    return {'msg': 'The message was sent successfully'}