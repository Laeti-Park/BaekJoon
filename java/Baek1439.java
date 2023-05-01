import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Baek1439 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String line = br.readLine();
        int count0 = 0;
        int count1 = 0;

        for (int i = 0; i < line.length(); i++) {
            if (line.charAt(i) == '1' && line.charAt((i + 1) % line.length()) == '0') {
                count0++;
            }
            if (line.charAt(i) == '0' && line.charAt((i + 1) % line.length()) == '1') {
                count1++;
            }
        }

        System.out.println(Math.min(count0, count1));
    }
}