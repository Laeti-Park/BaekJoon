import java.math.BigInteger;
import java.util.Scanner;

public class Baek14928_1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        BigInteger n = scanner.nextBigInteger();
        BigInteger m = new BigInteger("20000303");

        System.out.println(n.remainder(m));

        scanner.close();
    }
}