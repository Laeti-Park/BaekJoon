import java.io.*;
import java.util.Scanner;

public class Baek2775 {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();

        for (int i = 0; i < num; i++) {
            int k = scanner.nextInt();
            int n = scanner.nextInt();

            k += 1;
            n += 1;

            int[][] arr = new int[k][n];

            for (int a = 0; a < k; a++) {
                for (int b = 0; b < n; b++) {
                    if (a == 0 || b == 0) {
                        arr[a][b] = b;
                    } else {
                        arr[a][b] = arr[a - 1][b] + arr[a][b - 1];
                    }
                }
            }

            System.out.printf("%d\n", arr[k - 1][n - 1]);
        }
        scanner.close();
    }
}