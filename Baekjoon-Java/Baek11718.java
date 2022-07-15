import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Baek11718 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder builder = new StringBuilder();
        while (true) {
            String str = reader.readLine();
            if (str == null || str.isEmpty()) {
                break;
            }
            builder.append(str).append("\n");
        }
        reader.close();
        System.out.println(builder);
    }
}