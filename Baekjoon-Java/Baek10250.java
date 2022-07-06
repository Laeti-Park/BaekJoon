/* 
 * 10699번 문제 : 오늘 날짜
 * 
 * 문제 : 서울의 오늘 날짜를 출력하는 프로그램을 작성하시오.
 * 
 * 출력 : 서울의 오늘 날짜를 "YYYY-MM-DD" 형식으로 출력한다.
 */

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
            Integer.parseInt(st.nextToken());
            int N = Integer.parseInt(st.nextToken());

            int Y = N % H == 0 ? H : N % H;
            int X = N / H == 1 ? 1 : N / H;
            X = N % H == 0 ? X + 0 : X + 1;

            System.out.printf("%d%02d\n", Y, X);
        }
    }
}