# Autentykacja

1. Naszum celem jest stworzenie systemu rejestracji / logowania dla użytkowników. Bazuje on na api, które znajduje się pod adresem: http://auth-starter.noinputsignal.com/api/
2. Stwórz routing i ekrany rejestracji oraz logowania
3. Na stronie głównej zaprezentuj listę dowcipów która znajduje się w API
4. Stwórz widok/formularz dodawania dowcipu. Mogą z niego korzystać tylko zalogowani użytkownicy
5. Dodaj testy do ekranu logowania

Wskazówki: 
– Po zalogowaniu użytkownika przechowaj tokeny w local storage
– Spróbuj w js odczytać wartość tokena
– Pamiętaj o usunięciu tokenów po wylogowaniu użytkownika
– do walidacji formularzy możesz użyć biblioteki yup - https://github.com/jquense/yup
– w projekcie zainstalowana jest biblioteka bootstrap – możesz jej użyć do stylowania