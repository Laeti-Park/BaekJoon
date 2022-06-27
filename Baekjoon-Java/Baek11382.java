/* 
 * 11382번 문제 : 꼬마 정민
 * 
 * 문제 :
 * 꼬마 정민이는 이제 A + B 정도는 쉽게 계산할 수 있다.
 * 이제 A + B + C를 계산할 차례이다!
 * 
 * 입력 :
 * 첫 번째 줄에 A, B, C (1 ≤ A, B, C ≤ 10^12)이 공백을 사이에 두고 주어진다.
 * 
 * 출력 :
 * A+B+C의 값을 출력한다.
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Baek11382 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in)); // 키보드 입력
        String[] str = reader.readLine().split(" "); // 키보드 입력 받은 것을 공백으로 분리

        System.out.println(Long.parseLong(str[0])
                + Long.parseLong(str[1])
                + Long.parseLong(str[2])); // A+B+C의 값 출력, 10^12이므로 Long 자료형 사용
    }
}