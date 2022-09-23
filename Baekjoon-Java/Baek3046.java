import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Baek3046 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] num = br.readLine().split(" ");
        int r1 = Integer.parseInt(num[0]);
        int s = Integer.parseInt(num[1]);

        System.out.println((2 * s - r1));
    }
}