import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Baek5596 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int[][] a = new int[2][4];
        int[] sum = new int[2];

        for (int i = 0; i < 2; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            for (int j = 0; j < 4; j++) {
                a[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        for (int i = 0; i < 4; i++) {
            sum[0] += a[0][i];
            sum[1] += a[1][i];
        }

        System.out.println(sum[0] > sum[1] ? sum[0] : sum[1]);
    }
}