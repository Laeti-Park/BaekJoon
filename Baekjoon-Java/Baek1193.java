/* 
 * 1193번 문제 : 분수찾기
 * 
 * 문제 : 무한히 큰 배열에 다음과 같이 분수들이 적혀있다.
 * 이와 같이 나열된 분수들을 1/1 → 1/2 → 2/1 → 3/1 → 2/2 → … 과 같은
 * 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.
 * X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.
 * 
 * 입력 : 첫째 줄에 X(1 ≤ X ≤ 10,000,000)가 주어진다.
 * 
 * 출력 : 첫째 줄에 분수를 출력한다.
 */

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