import java.io.*;

public class Baek1193 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        int num = Integer.parseInt(reader.readLine());
        int denom = 1; // 분모
        int numer = 1; // 분자
        int max = 1;

        for (int i = num; i > 1; i--) {

            if (max % 2 != 0) {
                denom++;
                numer--;
            } else {
                numer++;
                denom--;
            }

            if (denom == 0) {
                denom = 1;
                numer = ++max;
            }
            if (numer == 0) {
                numer = 1;
                denom = ++max;
            }
        }
        System.out.println(numer + "/" + denom);
    }
}