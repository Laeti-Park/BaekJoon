import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Baek2455 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int people = 0;
        int max = 0;

        for (int i = 0; i < 4; i++) {
            String[] line = br.readLine().split(" ");

            int sum = people + Integer.parseInt(line[1]) - Integer.parseInt(line[0]);
            if (sum > max) {
                max = sum;
            }
            people = sum;
        }
        
        System.out.println(max);
    }
}