/* 
 * 10757번 문제 : 큰 수 A+B
 * 
 * 문제 : 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 * 
 * 입력 : 첫째 줄에 A와 B가 주어진다. (0 < A,B < 1010000)
 * 
 * 출력 : 첫째 줄에 A+B를 출력한다.
 */

import java.io.*;
import java.util.StringTokenizer;

public class Baek10757 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(reader.readLine(), " ");

        String A = new StringBuilder(st.nextToken()).toString();
        String B = new StringBuilder(st.nextToken()).toString();

        int maxSize = (A.length() > B.length() ? A.length() : B.length());

        int[] a = new int[maxSize + 1];
        int[] b = new int[maxSize + 1];

        for (int i = A.length() - 1; i >= 0; i--) {
            a[A.length() - i - 1] = A.charAt(i) - '0';
        }

        for (int i = B.length() - 1; i >= 0; i--) {
            b[B.length() - i - 1] = B.charAt(i) - '0';
        }

        for (int i = 0; i < maxSize; i++) {
            int plus = a[i] + b[i];

            a[i] = plus % 10;
            a[i + 1] = a[i + 1] + (plus / 10);
        }

        if (a[maxSize] != 0) {
            System.out.print(a[maxSize]);
        }
        for (int i = maxSize - 1; i >= 0; i--) {

            System.out.print(a[i]);
        }
    }
}