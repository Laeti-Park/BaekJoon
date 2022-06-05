import java.io.*;
import java.util.StringTokenizer;

public class Baek10250 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        int num = Integer.parseInt(reader.readLine());
        for (int i = 0; i < num; i++) {
            StringTokenizer st = new StringTokenizer(reader.readLine(), " ");

            // H : 높이, W : 방 개수, N : 손님 수
            int H = Integer.parseInt(st.nextToken());
            int W = Integer.parseInt(st.nextToken());
            int N = Integer.parseInt(st.nextToken());

            int Y = N % H == 0 ? H : N % H;
            int X = N / H == 1 ? 1 : N / H;
            X = N % H == 0 ? X + 0 : X + 1;
            
            System.out.printf("%d%02d\n", Y, X);
        }
    }
}