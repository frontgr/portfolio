import asyncio
from os import environ

from aiogram import Bot, Dispatcher, types
from aiogram.filters.command import Command
from aiogram import F 
from aiogram.filters.callback_data import CallbackData

from db import DB
from filters import RequestFilter, ApprovedFilter, AdminFilter
from keyboards import get_keyboard




bot_token = environ['BOT_TOKEN']
admin = environ['ADMIN']


bot = Bot(token=bot_token)
dp = Dispatcher()




# Хендлер для команды /start для чатов которые ещё не получили разрешение на рассылку
@dp.message(RequestFilter(), Command('start'))
async def cmd_start_not_approved_chats(message: types.Message):
    await message.answer(text='Подождите ещё, админ ещё не одобрил вашу заявку =(')


# Хендлер для команды /start для чатов которые уже получили разрешение на рассылку
@dp.message(ApprovedFilter(), Command('start'))
async def cmd_start_approved_chats(message: types.Message):
    await message.answer(text=f'Всё отлично, рассылка для "{message.chat.full_name}" уже одобрена. Вам не нужно отправлять заявку повторно.')
    
# Хендлер для команды /start для админов
@dp.message(AdminFilter(), Command('start'))
async def cmd_start_admin(message: types.Message):
    DB.insert_receivers(message.chat.id, message.chat.full_name, message.chat.username)
    await message.answer(text=f'Привет, {message.chat.full_name}')




async def main():
    DB(admin)
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())
