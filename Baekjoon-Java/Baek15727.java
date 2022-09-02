import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Baek15727 {
    public static void main (String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            
        int L = Integer.parseInt(br.readLine());
        int count = 0;

        while(L > 0) {
            L -= 5;
            count++;
        }

        System.out.println(count);
    }
}