/* 
 * 2744번 문제 : 대소문자 바꾸기
 * 
 * 문제 :
 * 영어 소문자와 대문자로 이루어진 단어를 입력받은 뒤,
 * 대문자는 소문자로, 소문자는 대문자로 바꾸어 출력하는 프로그램을 작성하시오.
 * 
 * 입력 :
 * 첫째 줄에 영어 소문자와 대문자로만 이루어진 단어가 주어진다.
 * 단어의 길이는 최대 100이다.
 * 
 * 출력 :
 * 첫째 줄에 입력으로 주어진 단어에서 대문자는 소문자로,
 * 소문자는 대문자로 바꾼 단어를 출력한다.
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Baek2744 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String str = reader.readLine();
        String answer = "";

        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') {
                answer += String.valueOf(str.charAt(i)).toLowerCase();
            } else {
                answer += String.valueOf(str.charAt(i)).toUpperCase();
            }
        }

        System.out.println(answer);
    }
}