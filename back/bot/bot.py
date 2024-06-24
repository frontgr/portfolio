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
admins = [environ['ADMIN_I'], environ['ADMIN_K'], environ['ADMIN_E']]


bot = Bot(token=bot_token)
dp = Dispatcher()



class RequestCallback(CallbackData, prefix='my_callback'):
    prefix: str
    tg_id: int
    name: str
    username: str|None



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

# Хендлер для команды /start для первого запуска 
@dp.message(Command('start'))
async def cmd_start_new_chats(message: types.Message):
    DB.insert_request(message.chat.id, message.chat.full_name, message.chat.username)

    allow_data = RequestCallback(prefix='Allow', tg_id=message.chat.id, name=message.chat.full_name, username=message.chat.username)
    deny_data =RequestCallback(prefix='Deny', tg_id=message.chat.id, name=message.chat.full_name, username=message.chat.username)

    await message.answer(text=f'''
        Привет, {message.chat.full_name}! \nЯ бот FrontGR, для получения уведомлений о новых заказах. Заявка на получения рассылки была отправлена...''')
    
    await bot.send_message(
            chat_id=DB.get_admin(), 
            text=f'''Новая заявка 🔔\n\nИмя: {message.chat.full_name} \nUsername: {message.chat.username or "Отсутствует"} \nID: {message.chat.id}\n\n Запросил доступ к рассылке.''',
            reply_markup=get_keyboard(allow_data.pack(), deny_data.pack())
        )



@dp.callback_query(RequestCallback.filter(F.prefix == 'Allow'))
async def callback_allow(callback: types.CallbackQuery, callback_data: RequestCallback):
    DB.insert_receivers(callback_data.tg_id, callback_data.name, callback_data.username)
    DB.delete_request(callback_data.tg_id)
    await callback.message.edit_text(text=f'''
            Имя: {callback_data.name} \nUsername: {callback_data.username or "Отсутствует"} \nID: {callback_data.tg_id}\n\nОдобрено ✅''')
    await callback.answer('Одобрено ✅')


@dp.callback_query(RequestCallback.filter(F.prefix == 'Deny'))
async def callback_deny(callback: types.CallbackQuery, callback_data: RequestCallback):
    DB.delete_request(callback_data.tg_id)
    await callback.message.edit_text(text=f'''
            Имя: {callback_data.name} \nUsername: {callback_data.username or "Отсутствует"} \nID: {callback_data.tg_id}\n\nОтказано ⛔''')
    await callback.answer('Отказано ⛔')



async def main():
    DB(admins)
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())
