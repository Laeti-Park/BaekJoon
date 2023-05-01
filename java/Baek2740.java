import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Baek2740 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] line = br.readLine().split(" ");
        int a = Integer.parseInt(line[0]);
        int b = Integer.parseInt(line[1]);

        int[][] num1 = new int[a][b];

        for (int j = 0; j < a; j++) {
            String[] input = br.readLine().split(" ");

            for (int k = 0; k < b; k++) {
                num1[j][k] = Integer.parseInt(input[k]);
            }
        }

        line = br.readLine().split(" ");
        b = Integer.parseInt(line[0]);
        int k = Integer.parseInt(line[1]);

        int[][] num2 = new int[b][k];
        int[][] answer = new int[a][k];

        for (int i = 0; i < a; i++) {
            Arrays.fill(answer[i], 0);
        }

        for (int j = 0; j < b; j++) {
            String[] input = br.readLine().split(" ");

            for (int r = 0; r < k; r++) {
                num2[j][r] = Integer.parseInt(input[r]);
            }
        }

        for (int i = 0; i < a; i++) {
            for (int j = 0; j < k; j++) {
                for (int r = 0; r < b; r++) {
                    answer[i][j] += num1[i][r] * num2[r][j];
                }
            }
        }

        for (int i = 0; i < a; i++) {
            for (int j = 0; j < k; j++) {
                System.out.print(answer[i][j] + " ");
            }
            System.out.println();
        }
    }
}