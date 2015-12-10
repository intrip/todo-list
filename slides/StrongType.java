public class StrongType {
   public static void main(String[] args){
      String test = "Questo è un testo";
      System.out.println(String.format("classe: %s", test.getClass()) );
      // classe: class java.lang.String

      Integer intero = 222;
      System.out.println(String.format("classe: %s", intero.getClass()) );
      // classe: class java.lang.Integer
   }
}
