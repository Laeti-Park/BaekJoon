import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Baek1100 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] board = new String[8];
        int count = 0;

        for (int i = 0; i < 8; i++) {
            board[i] = br.readLine();
        }

        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < board.length; j++) {
                if (i % 2 == 0) {
                    if (j % 2 == 0 && board[i].charAt(j) == 'F') {
                        count++;
                    }
                } else {
                    if (j % 2 == 1 && board[i].charAt(j) == 'F') {
                        count++;
                    }
                }
            }
        }

        System.out.println(count);
    }
}