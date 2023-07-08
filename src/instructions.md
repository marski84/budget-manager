<h2 align="center">Budget manager</h2>

<br>

## Wymagana wiedza

- Typescript, Angular

## Technologie potrzebne do zadania

- Typescript, Angular, HostListener, Renderer2,

## Cele główne

- [ ] Dashboard module:

* Nawigacja w sidenav.

- [ ] Dane do wyświetlenia masz w pliakch outcomes oraz incomes:

* Weź dane z dołączonych plików i wyświetl
* Pamiętaj że nie dotykamy struktury danych w plikach :)
* Pamiętaj żeby wszystko ładnie otypować, niech nikt nie płacze zmieniając Twój kod :)

- [ ] Chart module:

1. Moduł który ma za zadanie okiełznać NGX-CHARTS.
2. Ogarniamy 2 tryby wyświetlania `Vertical Bar Chart` oraz `Pie Chart` nie da sie użyć innych typów.

- [ ] Moduł Incomes dotyczący miesięcznych zysków w salonie kosmetycznym:

1. Wykres miesięcy => `Vertical Bar Chart`.
2. Wykres po najechaniu w miesiąc emituje wartość którą łapiemy w parencie i wyświetlamy preview z czego sklada się dochód danego miesiąca w componencie po prawej stronie. Po zdjęciu myszki wyświetlamy placeholder który czeka na najechanie na któryś z miesięcy.

- [ ] Moduł Outcomes dotyczący miesięcznych wydatków w salonie kosmetycznym:

1. Wykres miesięcy => `Vertical Bar Chart`
2. Kliknięcie miesiąca na wykresie powoduje otwarcie popupu gdzie mamy możliwość podejrzenia jakie wydatki składają się na ten miesiąc na wykresie w trybie `Pie Chart`. Dodatkowo mamy w tym popupie możliwość dodania kolejnego wydatku do tego miesiąca.
3. Mamy również podstrone do dodawania wydatku w dowolnego miesiąca => select z miesiącem + współdzielony formularz dodawania wydatku.
4. Pamiętaj o smart/dumb - formularz nie wie o całości miesiąca a nie mozemy dodać drugiego wydatku o tej samej nazwie. Sprawdzane jest to w parencie i to on informuje component formularza o tym czy jest wporządku.

- [ ] Dodatkowo:

* Musimy wyświetlić loader aplikacji - tzn. Zanim załaduje się aplikacja zazwyczaj mija kila-kilkanaście(lub nawet dziesiąt sekund). Zależnie od wielkości aplikacji oraz szybkości łacza, chcemy więc aby wyświetlił się jakiś pulsujący loader jeszcze przed załadowaniem aplikacji(jako loader wykorzystaj jakiś przykładowy css'owy gotowiec).

## Przydatne linki
