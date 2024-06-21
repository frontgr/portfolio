from aiogram import types
from aiogram.filters import BaseFilter

from db import FiltersDB


# Фильтр определяющий админа        
class AdminFilter(BaseFilter):
    async def __call__(self, message: types.Message) -> bool:
        return FiltersDB.is_admin(message.chat.id)

# Фильтр определяющий входит ли id в список запросов
class RequestFilter(BaseFilter):
    async def __call__(self, message: types.Message) -> bool:
        return FiltersDB.request_is_exists(message.chat.id)
    
# Фильтр определяющий входит ли id в список на рассылку
class ApprovedFilter(BaseFilter):
    async def __call__(self, message: types.Message) -> bool:
        return FiltersDB.request_is_approved(message.chat.id)
    