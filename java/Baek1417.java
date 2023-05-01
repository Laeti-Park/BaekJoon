import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Baek1417 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int caseNum = Integer.parseInt(br.readLine());
        int[] voted = new int[caseNum];
        int biggest = 0;
        int num = 0;
        int count = 0;

        for (int i = 0; i < caseNum; i++) {
            voted[i] = Integer.parseInt(br.readLine());
        }

        while (true) {
            biggest = 0;
            for (int i = 0; i < caseNum; i++) {
                if(biggest <= voted[i]) {
                    biggest = voted[i];
                    num = i;
                }
            }
            if(num == 0) {
                break;
            }
            voted[num]--;
            voted[0]++;
            count++;
        }

        System.out.println(count);
    }
}