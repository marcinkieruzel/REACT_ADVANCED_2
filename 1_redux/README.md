# Redux Bank 

Naszym celem jest stworzenie aplikacji która będzie wizualizacją kont użytkowników banku

1. Stwórz routing aplikacji. Powinien on zawierać następujące ścieżki. 
- /bank – strona główna banku na której będziemy wyświetlali stan wszystkich lokat i kredytów w banku
- /user/:name – strona klienta banku z formularzem dodawania lokaty oraz formularzem dodawania kredytu. Przyjmujemy, że parametr :name do identyfikator użytkownika a wykonanie pierwszej transakcji jest jednoznaczne z zainicjowaniem konta
2. Stwórzmy `slice` który będzie odpowiadał za zarządzanie bankiem. Powinien on zawierać listę wszystkich aktywnych użytkowników wraz z ich bilansem, tablicę z listą transakcji oraz aktualny bilans całego banku
3. Oprocentowanie dla lokat bankowych wynosi 0.005% w skali sekundy a dla kredytów 0.01% w skali sekundy
4. Do strony banku dodaj funkcjonalność sprawdzania bilansu banku w dolarach – Pobierz aktualny kurs dolara przy pomocy API. Rezultat zapisz do slice.

Tipy: Do stworzenia formularzy możesz użyć biblioteki bootstrap. Pliks z CSS jest już zaimportowany.
W katalogu src znajduje się przykład zastosowania slice (Komponent Counter)

API KEY: EzYm3OUpR9GqAZ9G5le2vN8M77tEoswU
https://apilayer.com/marketplace/exchangerates_data-api#documentation-tab
