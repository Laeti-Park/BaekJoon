import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Baek2441 {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(br.readLine());

        for (int i = num; i > 0; i--) {
            for (int j = 0; j < num - i; j++) {
                System.out.print(" ");
            }
            for (int j = num; j > num - i; j--) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}