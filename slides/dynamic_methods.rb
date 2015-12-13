class Prova
   def metodo_1
      puts "io sono metodo 1"
   end
end

Prova.new.metodo_1
# "io sono metodo 1"
Prova.new.metodo_2
# undefined method :metodo_2

Prova.class_eval do
   def metodo_2
      puts "io sono metodo 2 e sono stato aggiunto dinamicamente"
   end
end

Prova.new.metodo_1
# "io sono metodo 1"
Prova.new.metodo_2
# "io sono metodo 2 e sono stato aggiunto dinamicamente"
