def esegui_blocco(nome, &block)
   puts block ? block.call(nome) : "Ciao #{nome}"
end

esegui_blocco("Mario")
# Ciao Mario
variabile_esterna = "Ci sono anche io"
esegui_blocco("Mario") { |nome| "Riciao Bigger #{nome.upcase} #{variabile_esterna}" }
# Riciao Bigger MARIO
