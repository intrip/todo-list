1. Lista todo base con dati nello scope js
    - crea rotta e controller e view rails vuota
    - app.js
    - ng-view e file public index.html con dentro container e item-list-container
    - items.html con item-list e ul.todo-list e li.item con title e due_date
    - popola lo scope con gli items con dentro i title description body completed due_date
2. Dettaglio todo singolo
    - direttiva dettaglio con titolo descrizione note
    - metodo selectItem in items e integralo con direttiva che mostra il selectedItem.value
3. Backend lista item
    - crea model item e migrations con :title, :description, :body, :due_date
    - popola il model con dei dati vari
    - api controller todo con metodi: index, create, update, destroy
4. Integrazione api lista
    - creare item_repository repository con all
    - associare ad item il metodo di refresh on init
5. Integrazione api update
    - aggiungere all'item_repository l'update
    - associare ad item-detail il save (non abilitato se non selectedItem e saving)
    - flash message di success con jQuery
6. Integrazione api create
    - aggiungere all'item_repository il create
    - aggiungere l'addItem ad items
7. Integrazione api delete
    - aggiungere all'item_repository il delete
    - aggiungere ad item_detail il metodo deleteItem
    - aggiungere un div actions e link #delete con ng-click selectedItem && deleteItem(selectedItem.id)
8. Ordinamento e ricerca base
    - Ordinamento angular
    - Ricerca $search
9  Gestione due date
    - Integrazione dettaglio due date con angular datetimepicker
    - Formattazione data model corretta
10 Gestione task completati
    - Checkbox per completato con integrazione con api update item
    - Filtraggio per completato e non via api
11 Integrazione autenticazione devise rails
    - Installazione devise
    - Layout di autenticazione
    - Modifica controller per autenticare prima
12 Integrazione autenticazione api
    - Modifica api che obbliga autenticazione cookie
    - Filtraggio automatico per current_user.id in api
13 Extra
    - Show data scaduta in rosso
    - Gravatar integrazione
    - Setup seeds
    - Show tests

finito il 13 porta questo file e le slides(vedi se c'è da aggiungere qualosa) su tutti i rami e sul master.