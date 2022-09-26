import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Baek2163 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] line = br.readLine().split(" ");
        int n = Integer.parseInt(line[0]);
        int m = Integer.parseInt(line[1]);
        int count = 0;

        count = m * n - 1;
        System.out.println(count);
    }
}