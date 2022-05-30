# Backend do aplikacji React.js

Aby uruchomić backend należy:
- Zmienić nazwę pliku `.env_TEMPLATE` na `.env`
- Zmienić wartosci w pliku `.env`
    - TOKEN_SECRET jest używany w hashowaniu haseł
    - DB_HOST to adres ip bazy danych MongoDB
    - DB_PORT to port bazy danych MongoDB
    - DB_NAME to nazwa bazy danych MongoDB
- Mieć postawioną bazę danych MongoDB
- Zainstalować potrzebne moduły `npm install`
- Uruchomić aplikację `node app.js`