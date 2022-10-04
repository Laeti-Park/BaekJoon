import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Baek2442 {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(br.readLine());

        for (int i = num; i > 0; i--) {
            for (int j = num - i; j < num - 1; j++) {
                System.out.print(" ");
            }
            for (int j = 0; j < (num - i) * 2 + 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}