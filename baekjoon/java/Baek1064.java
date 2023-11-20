import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Baek1064 {
    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int[] num = new int[6];

        for (int i = 0; i < 6; i++) {
            num[i] = Integer.parseInt(st.nextToken());
        }

        double a = Math.sqrt(Math.pow(Math.abs(num[2] - num[0]), 2) + Math.pow(Math.abs(num[3] - num[1]), 2));
        double a_in = (double) Math.abs(num[3] - num[1]) / (double) Math.abs(num[2] - num[0]);
        double b = Math.sqrt(Math.pow(Math.abs(num[4] - num[0]), 2) + Math.pow(Math.abs(num[5] - num[1]), 2));
        double b_in = (double) Math.abs(num[5] - num[1]) / (double) Math.abs(num[4] - num[0]);
        double c = Math.sqrt(Math.pow(Math.abs(num[4] - num[2]), 2) + Math.pow(Math.abs(num[5] - num[3]), 2));
        double c_in = (double) Math.abs(num[5] - num[3]) / (double) Math.abs(num[4] - num[2]);

        double temp;

        if (a > b) {
            temp = a;
            a = b;
            b = temp;
        }
        if (a > c) {
            temp = a;
            a = c;
            c = temp;
        }
        if (b > c) {
            temp = b;
            b = c;
            c = temp;
        }

        if (a_in == b_in && b_in == c_in) {
            System.out.println(-1.0);
        } else {
            System.out.println((c - a) * 2);
        }

    }
}