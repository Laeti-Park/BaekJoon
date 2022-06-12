import java.io.*;

public class Baek2292{
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        int num = Integer.parseInt(reader.readLine());
        int cnt = 1;
        int a = 1;

        while(true) {
            if(num<=a){
                break;
            } else {
                a += (6 * cnt);
                cnt++;
            }
        }
        System.out.println(cnt);
    }
}