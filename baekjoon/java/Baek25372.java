import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Baek25372 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int num = Integer.parseInt(br.readLine());
        for (int i = 0; i < num; i++) {
            String password = br.readLine();
            if (password.length() >= 6 && password.length() <= 9) {
                System.out.println("yes");
            } else {
                System.out.println("no");
            }
        }
    }
}