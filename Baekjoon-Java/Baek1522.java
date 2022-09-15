import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Baek1522 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String input = br.readLine();
        int count = Integer.MAX_VALUE;
        int aCount = 0;

        for (int i = 0; i < input.length(); i++) {
            if (input.charAt(i) == 'a') {
                aCount++;
            }
        }

        for (int i = 0; i < input.length(); i++) {
            int bCount = 0;
            for (int j = i; j < aCount + i; j++) {
                if (input.charAt(j % input.length()) == 'b') {
                    bCount++;
                }
            }
            count = count > bCount ? bCount : count;
        }
        System.out.println(count);
    }
}