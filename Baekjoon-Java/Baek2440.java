import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Baek2440 {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int num = Integer.parseInt(br.readLine());
        for (int j = 0; j < num; j++) {
            for (int i = num - j; i > 0; i--) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}