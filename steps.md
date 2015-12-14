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
    - ng-click selectedItem && deleteItem(selectedItem.id)

poi i seeds
infine aggiorna questo file e porta questo e slide su tt i branch 