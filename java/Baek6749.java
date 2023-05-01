/*
 * You know a family with three children.
 * Their ages form an arithmetic sequence:
 * the difference in ages between the middle child and youngest child
 * is the same as the difference in ages between the oldest child
 * and the middle child. For example, their ages could be 5, 10 and 15,
 * since both adjacent pairs have a difference of 5 years.
 * 
 * Given the ages of the youngest and middle children,
 * what is the age of the oldest child?
 * 
 * 세 자녀가 있는 가족이 있다.
 * 자녀들의 나이는 등차수열을 이룹니다. * arithmetic 산수, 연산; 산술, 계산
 * 막내-둘째의 나이 차이는 둘째-첫째의 나이 차이와 같습니다.
 * 예를들면 5, 10, 15살의 자녀가 있다면 그들은 5살씩 차이 납니다.* adjacent 인접한, 가까운
 * 가장 나이 많은 자녀의 나이는 몇 살일까요?
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Baek6749 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] age = new int[2];

        for (int i = 0; i < 2; i++) {
            age[i] = Integer.parseInt(br.readLine());
        }

        System.out.println(age[1] + (age[1] - age[0]));
    }
}