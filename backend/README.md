# Backend do aplikacji React.js

Aby uruchomić backend należy:
- Mieć postawioną bazę danych MongoDB
- Zmienić wartosci w pliku `.env`
    - TOKEN_SECRET jest używany w hashowaniu haseł
    - DB_HOST to adres ip bazy danych MongoDB
    - DB_PORT to port bazy danych MongoDB
    - DB_NAME to nazwa bazy danych MongoDB
- Zainstalować potrzebne moduły `npm install`
- Uruchomić aplikację `node app.js`