# Домашний API: постоянный туннель

Обновлено 12.11.2026.

## Текущее состояние

Именованный Cloudflare Tunnel создан и подключён к домашнему тестовому API. Панель Cloudflare показывает Healthy. Настроен адрес api.sportfondhm.ru. Внешняя проверка этого адреса ожидает активации DNS-зоны.

Записи сайтов в Cloudflare подготовлены для GitHub Pages. Почтовые записи сохранены. Зона Cloudflare пока Pending, потому что смена DNS-серверов у регистратора ещё не выполнена: эта функция отключена в восстанавливаемой панели Beget.

## Запуск

Для текущего именованного туннеля используйте оба файла:

```sh
docker compose -f compose.yaml -f compose.named.yaml config --quiet
docker compose -f compose.yaml -f compose.named.yaml up -d
```

Остановка:

```sh
docker compose -f compose.yaml -f compose.named.yaml down
```

Локальный API продолжает отвечать на http://127.0.0.1:18765/health.

compose.named.yaml ожидает отдельный защищённый файл окружения. Создавайте его по локальной инструкции сервера; токен не хранить в GitHub. Не публикуйте полный вывод docker compose config или docker inspect: он может содержать секреты.

Прежний Quick Tunnel остановлен, его временная ссылка больше не используется. Запуск только compose.yaml вернёт временный туннель.

## Следующие проверки

После разрешения смены NS и активации Cloudflare проверить GitHub Pages, HTTPS, почту и https://api.sportfondhm.ru/health из независимой сети.

Автозапуск Windows/WSL2/Docker после перезагрузки, режим сна, восстановление backend, ботов и базы данных остаются отдельными задачами. Тестовый API не содержит production-данных.
