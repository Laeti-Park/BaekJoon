/* 
 * 2869번 문제 : 달팽이는 올라가고 싶다
 * 
 * 문제 : 땅 위에 달팽이가 있다.
 * 이 달팽이는 높이가 V미터인 나무 막대를 올라갈 것이다.
 * 달팽이는 낮에 A미터 올라갈 수 있다.
 * 하지만, 밤에 잠을 자는 동안 B미터 미끄러진다.
 * 또, 정상에 올라간 후에는 미끄러지지 않는다.
 * 달팽이가 나무 막대를 모두 올라가려면,
 * 며칠이 걸리는지 구하는 프로그램을 작성하시오.
 * 
 * 입력 : 첫째 줄에 세 정수 A, B, V가 공백으로 구분되어서 주어진다.
 * (1 ≤ B < A ≤ V ≤ 1,000,000,000)
 * 
 * 출력 : 첫째 줄에 달팽이가 나무 막대를 모두 올라가는데 며칠이 걸리는지 출력한다.
 */

import java.io.*;
import java.util.StringTokenizer;

public class Baek2869 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(reader.readLine(), " ");

        // A(올라간 정도) / B(미끄러진 정도) / V(높이)
        int A = Integer.parseInt(st.nextToken());
        int B = Integer.parseInt(st.nextToken());
        int V = Integer.parseInt(st.nextToken());

        // 핵심 : 반복문을 통해서 구하는 것이 아닌, 계산식을 이용해서 시간 제한을 줄여야 한다.
        int answer;

        if (V <= A) {
            answer = 1;
        } else if ((V - A) % (A - B) == 0) {
            answer = (V - A) / (A - B) + 1; // V - A가 A / B로 나누어 떨어지는 경우(+1)
        } else {
            answer = (V - A) / (A - B) + 2; // V - A가 A / B로 나눠도(+1) 나머지가 생기는 경우(+1)
        }

        System.out.println(answer);
    }
}