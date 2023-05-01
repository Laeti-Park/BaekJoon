import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Baek2750 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int num = Integer.parseInt(br.readLine());
        int[] N = new int[num];
        for (int i = 0; i < num; i++) {
            N[i] = Integer.parseInt(br.readLine());
        }

        Arrays.sort(N);

        for (int i = 0; i < num; i++) {
            System.out.println(N[i]);
        }
    }
}