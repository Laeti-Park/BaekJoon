/* 
 * 3003번 문제 : 킹, 퀸, 룩, 비숍, 나이트, 폰
 * 
 * 문제 : 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 * 
 * 입력 : 첫째 줄에 A, 둘째 줄에 B가 주어진다. (0 < A, B < 10)
 * 
 * 출력 : 첫째 줄에 A+B를 출력한다.
 */

import java.io.*;
import java.util.Scanner;

public class Baek2558 {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        int m = Integer.parseInt(scanner.nextLine());

        System.out.println(n + m);

        scanner.close();
    }
}