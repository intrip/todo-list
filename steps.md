1. Lista todo base con dati nello scope js
    - fagli vedere la struttura dell'applicativo angular e rails (layout rails, struttura mcv rails e angular, gemfile e gemme)
    - crea rotta e controller e view rails vuota
    - app.js (angular.module('todoApp',['ngRoute'])
    - ng-view e file public index.html con dentro container e item-list-container (direttiva in col-md-8)
    - items.html con item-list e ul.todo-list e li.item con title e due_date con | date: "dd/MM/yyyy HH:mm"
    - popola lo scope controller con gli items con dentro i title description body completed due_date
2. Dettaglio todo singolo
    - direttiva dettaglio con titolo descrizione note, ricordati il div.form-group
    angular.module('todoApp')

        .directive('itemDetail', function (itemRepository) {
            return {
                replace: true,
                restrict: 'E',
                templateUrl: 'todo/item-detail.html',
                controller: function($scope){
                    $scope.updated = false;
                },
                link: function(scope, element, attrs) {
    - metodo selectItem in items e integralo con direttiva che mostra il selectedItem.value
3. Backend lista item
    - crea model item e migrations con :title, :description, :body, :due_date
    - popola il model con dei dati vari (via console)
    - api controller todo con metodi: index, create, update, destroy
4. Integrazione api lista
    - creare item_repository repository con all
    angular.module('todoApp')

    .factory('itemRepository', function($http){
            var resourceUrl = '/api/todo';

            return {
                all: function(params) {
                    params = params || {};
                    return $http({method: 'GET', url: resourceUrl, params: params});
                },
    - associare ad item il metodo di refresh on init
5. Integrazione api update
    - aggiungere all'item_repository l'update
    - associare ad item-detail il save (non abilitato se non selectedItem e saving)
    - flash message di success con jQuery (jQuery(".alert").show().delay(1000).fadeOut(1000);) e .alert display: none
6. Integrazione api create
    - aggiungere all'item_repository il create
    - aggiungere l'addItem ad items ($scope.items.unshift(item.data);)
7. Integrazione api delete
    - aggiungere all'item_repository il delete
    - aggiungere ad item_detail il metodo deleteItem
    for(var i= 0, len = scope.items.length; i<len; i++) {
                                    if(scope.items[i].id === id){
                                        scope.items.splice(i, 1);
    - aggiungere un div actions e link #delete con ng-click selectedItem && deleteItem(selectedItem.id)
8. Ordinamento e ricerca base
    - Ordinamento angular: select per l'ordering e item metodi updateOrdering che ritorna type + field ($scope.orderingFilter = type + field;)
      l'ordinamento usa $scope.orderingFilter
     {label: "Ultimo aggiornamento", value: "updated_at"}
                        ];
                        $scope.ordering.types = [
                            {label: "Crescente", value: "+"},
      dove type è - per desc oppure asc senza niente davanti
      <select id="ordering-field"
                          ng-model="ordering.field"
                          ng-change="updateOrdering()"
                          ng-options="field.value as field.label for field in ordering.fields"
                          class="form-control"
                          ></select>
    - Ricerca $search
    - filtri con form .form-inline e .filter-form e  div.form-group
9.  Gestione due date
    - Integrazione dettaglio due date con angular datetimepicker:
        metti la 'ui.bootstrap.datetimepicker' in app.js
        inserisci il dropdown e abilitalo: $(document).ready(function(){$('.dropdown-toggle').dropdown()});
        <div class="dropdown">
                        <label>Scadenza</label>
                        <a class="dropdown-toggle" id="due-date" role="button" data-toggle="dropdown" data-target="#">
                            <div class="input-group"><input type="text" class="form-control" format-date-time-italian data-ng-model="selectedItem.due_date"><span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                            </div>
                        </a>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
                            <datetimepicker data-ng-model="selectedItem.due_date" data-datetimepicker-config="{ dropdownSelector: '#due-date' }"  />
                        </ul>
                    </div>
    - Formattazione data model corretta: format-date-time-italian
10. Gestione task completati
    - aggiungi campo completed default=false con migration
    - aggiungi il completed ai permitted params del ctrl
    - aggiungi checkbox completato con al ng-click updateItem e ng-checked="item.completed"
    - Filtraggio per da fare/completato/tutti via api rails aggiungendo i filtri dinamici filter[field]=value
    filters.each do |key, value|
              items = items.where(key => value)
            end
      integrazione con la select angular e completedOptions array con {label:, value:}
11. Integrazione autenticazione devise rails
    - Installazione devise
        rails generate devise:install
        rails generate devise User
        devise_for :users
        rails generate devise:views
        configura la application_auth layout e different layout for devise (scommenta parte commentata)
    - Layout di autenticazione con yield dentro un div.login
    - Aggiungi flash messages devise if notice, if alert in div.login
    <% if notice %><div class="alert alert-info"><%= notice %></div>
    - Modifica controller per autenticare prima
12. Integrazione logout e navbar
    - Aggiungi navbar con navbar-brand
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li class="navbar-brand">Todo App</li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown profile-dropdown">
    - Aggiungi dropdown per i logout con show del current user email (ricordati il dropdown toogle in application.js fatto prima che serve 
      e ricordati link_to destroy_user_session_path, method: :delete )
13. Integrazione autenticazione api
    - Modifica api che obbliga autenticazione cookie before_action :authenticate_user! e spiegala
    - migration con reference rails generate migration AddUserRefToItem user:references
    - aggiungi belongs_to :user in item
    - Filtraggio automatico per current_user.id in api
14. Extra
    - Show data scaduta in rosso: classe expired if (Date(due_date) < new Date() return 'expired')
    - Gravatar integrazione (gravatar_image_tag(current_user.email, alt: current_user.email, class: "gravatar")
    - Setup seeds
    - Show tests (fixa i rails_helper attivando i seed e invertendo item con user destroy)
