import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Comparator;

public class Baek1181 {
    public static void main(String[] args) throws IOException {
        /*
         * String[] words = new String[num];
         * ArrayList<String> answer = new ArrayList<>();
         * 
         * for (int i = 0; i < num; i++) {
         * words[i] = br.readLine();
         * }
         * 
         * for (int i = 0; i < num; i++) {
         * Boolean dup = false;
         * 
         * for (int j = i + 1; j < num; j++) {
         * if (words[i].equals(words[j])) {
         * dup = true;
         * }
         * }
         * if (!dup) {
         * answer.add(words[i]);
         * }
         * }
         * 
         * for (int i = 0; i < answer.size(); i++) {
         * String temp;
         * for (int j = 0; j < answer.size() - 1 - i; j++) {
         * if (answer.get(j).length() > answer.get(j+1).length()) {
         * temp = answer.get(j);
         * answer.set(j, answer.get(j+1));
         * answer.set(j+1, temp);
         * } else if (answer.get(j).length() == answer.get(j+1).length()) {
         * int k = 0;
         * boolean changed;
         * do {
         * changed = false;
         * if (answer.get(j).charAt(k) != answer.get(j+1).charAt(k)) {
         * if (answer.get(j).charAt(k) > answer.get(j+1).charAt(k)) {
         * temp = answer.get(j);
         * answer.set(j, answer.get(j+1));
         * answer.set(j+1, temp);
         * }
         * changed = true;
         * }
         * k++;
         * } while (k < answer.get(j).length() && !changed);
         * }
         * }
         * }
         * 
         * for (int i = 0; i < answer.size(); i++) {
         * System.out.println(answer.get(i));
         * }
         */

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int num = Integer.parseInt(br.readLine());
        String[] answer = new String[num];

        for (int i = 0; i < num; i++) {
            answer[i] = br.readLine();
        }

        Arrays.sort(answer, new Comparator<String>() {
            public int compare(String s1, String s2) {
                if (s1.length() == s2.length()) {
                    return s1.compareTo(s2);
                }
                else {
                    return s1.length() - s2.length();
                }
            }
        });

        System.out.println(answer[0]);

        for (int i = 1; i < num; i++) {
            if (!answer[i].equals(answer[i - 1])) {
                System.out.println(answer[i]);
            }
        }
    }
}