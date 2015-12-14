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
    - api controller todo con metodi: index, create, update, destroy
4. Integrazione api lista
    - creare servizio repository con crud
    - creare il setup e refresh lista items in angular
5. Integrazione api dettaglio utente
    - Tasto save non abilitato fino a che non hai id
    - Tasto di delete con confirm
    - Messaggio di success

