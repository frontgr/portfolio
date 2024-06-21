from aiogram import types

def get_keyboard(allow_data: str, deny_data: str):
    buttons = [
        [types.InlineKeyboardButton(text='Одобрить ✅', callback_data=allow_data),
        types.InlineKeyboardButton(text='Отказать ⛔', callback_data=deny_data)]
    ]
    keyboard = types.InlineKeyboardMarkup(inline_keyboard=buttons)

    return keyboard