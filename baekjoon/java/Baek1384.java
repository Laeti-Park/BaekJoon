import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Baek1384 {
    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int num;
        int count = 0;
        while ((num = Integer.parseInt(br.readLine())) != 0) {
            String[][] paper = new String[num][num];
            Boolean nasty = false;

            for (int i = 0; i < num; i++) {
                StringTokenizer st = new StringTokenizer(br.readLine());
                paper[i][0] = st.nextToken();
                for (int j = 1; j < num; j++) {
                    paper[i][j] = st.nextToken();
                }
            }

            System.out.println("Group " + (count + 1));

            for (int i = 0; i < num; i++) {
                for (int j = 1; j < num; j++) {
                    if (paper[i][j].equals("N")) {
                        System.out.println(paper[(i + (num - j)) % num][0] + " was nasty about " + paper[i][0]);
                        nasty = true;
                    }
                }
            }

            if (!nasty) {
                System.out.println("Nobody was nasty");
            }
            count++;

            System.out.println();
        }
    }
}