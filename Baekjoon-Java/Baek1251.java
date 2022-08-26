import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Baek1251 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String input = br.readLine();
        char[] chars = input.toCharArray();
        Arrays.sort(chars);

        input = new StringBuilder(new String(chars)).reverse().toString();

        System.out.println(input);
    }
}