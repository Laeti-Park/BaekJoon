import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Baek5543 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int[] num = new int[5];
        int burger;
        int drink;

        for (int i = 0; i < 5; i++) {
            num[i] = Integer.parseInt(br.readLine());
        }

        burger = num[0];
        drink = num[3];

        for (int i = 1; i < 3; i++) {
            if (burger > num[i])
                burger = num[i];
        }

        if (drink > num[4])
            burger = num[4];

        System.out.println(burger + drink - 50);
    }
}