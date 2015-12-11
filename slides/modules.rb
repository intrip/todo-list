module ProvaModulo
   def metodo_1
      puts "io sono metodo_1 di #{self.class}"
   end
end

class Prova
   include ProvaModulo
end

Prova.new.metodo_1
# "io sono metodo_1 di Prova"
