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