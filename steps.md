1. Lista todo base con dati nello scope js
    - crea rotta e controller e view rails vuota
    - app.js
    - ng-view e file public index.html con dentro container e item-list-container, due date con | date: "dd/MM/yyyy HH:mm"
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
    - Ordinamento angular: select per l'ordering e item metodi updateOrdering che ritorna type + field
      dove type è - per desc oppure asc senza niente davanti
    - Ricerca $search
9.  Gestione due date
    - Integrazione dettaglio due date con angular datetimepicker:
        metti la 'ui.bootstrap.datetimepicker' in app.js
        inserisci il dropdown e abilitalo: $(document).ready(function(){$('.dropdown-toggle').dropdown()});
    - Formattazione data model corretta: format-date-time-italian
10. Gestione task completati
    - aggiungi campo completed default=false con migration
    - aggiungi il completed ai permitted params del ctrl
    - aggiungi checkbox completato con al ng-click updateItem e ng-checked="item.completed"
    - Filtraggio per da fare/completato/tutti via api rails aggiungendo i filtri dinamici filter[field]=value
      integrazione con la select angular e completedOptions array con {label:, value:}
11. Integrazione autenticazione devise rails
    - Installazione devise
        rails generate devise:install
        rails generate devise User
        devise_for :users
        rails generate devise:views
        configura la application_auth layout e different layout for devise
    - Layout di autenticazione con yield e div.login
    - Aggiungi flash messages devise if notice, if alert
    - Modifica controller per autenticare prima
12. Integrazione logout e navbar
    - Aggiungi navbar con navbar-brand
    - Aggiungi dropdown per i logout con show del current user email (ricordati il dropdown toogle in application.js fatto prima che serve 
      e ricordati link_to destroy_user_session_path, method: :delete )
13. Integrazione autenticazione api
    - Modifica api che obbliga autenticazione cookie
    - migration con reference rails generate migration AddUserRefToItem user:references
    - aggiungi belongs_to :user in item
    - Filtraggio automatico per current_user.id in api
14. Extra
    - Show data scaduta in rosso
    - Gravatar integrazione
    - Setup seeds
    - Show tests

finito il 13 porta questo file e le slides(vedi se c'è da aggiungere qualosa) su tutti i rami e sul master.
integra slides con https://www.ruby-lang.org/it/documentation/ruby-from-other-languages/to-ruby-from-java/
finito tutto vedi x auto update model e al max aggiugilo