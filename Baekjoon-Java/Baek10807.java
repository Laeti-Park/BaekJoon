import java.io.*;
import java.util.StringTokenizer;

public class Baek10807 {
    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));

        // 정수의 개수 n을 정함
        int num = Integer.parseInt(bf.readLine());
        int[] arr = new int[num];

        // n개의 정수 입력
        StringTokenizer st = new StringTokenizer(bf.readLine());
        for (int i = 0; i < num; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        // 찾으려는 정수 v
        int findNum = Integer.parseInt(bf.readLine());
        int count = 0;

        // n개의 정수 중 v의 개수를 찾음
        for (int i = 0; i < num; i++) {
            if (arr[i] == findNum) {
                count++;
            }
        }

        System.out.println(count);
    }
}