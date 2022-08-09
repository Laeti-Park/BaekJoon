// import java.io.*;
// import java.math.BigInteger;
import java.util.Scanner;

public class Baek14928 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // BigInteger n = scanner.nextBigInteger();
        // BigInteger m = new BigInteger("20000303");

        // System.out.println(n.remainder());
        // for문이 속도가 더 빠르다.

        String num = scanner.next();
        long temp = 0;
        for (int i = 0; i < num.length(); i++) {
            temp = (temp * 10 + (num.charAt(i) - '0')) % 20000303;
        }

        System.out.println(temp);
        scanner.close();
    }
}