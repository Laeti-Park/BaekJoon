import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Baek2822 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] array = new int[8];
        int[] score = new int[5];
        int sum = 0;

        for (int i = 0; i < 8; i++) {
            array[i] = Integer.parseInt(br.readLine());
        }

        for (int i = 0; i < 5; i++) {
            int big = array[0];
            int index = 0;
            for (int j = 0; j < 8; j++) {
                if (array[j] > big) {
                    big = array[j];
                    index = j;
                }
            }

            sum += big;
            array[index] = 0;
            score[i] = index + 1;
        }

        System.out.println(sum);

        Arrays.sort(score);

        for (int i = 0; i < 5; i++) {
            System.out.print(score[i] + " ");
        }
    }
}
