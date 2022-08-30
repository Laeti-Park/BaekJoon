public class BBAK {
    public static void main(String[] args) {
        char[][] board = new char[10][10];

        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                board[i][j] = 'O';
            }
        }
        int midNum = 9;

        for (int i = 1; i <= 4; i++) {
            for (int j = midNum / 2
                    - (i <= 2 ? 0 : (int) (Math.pow(2, i - 2)) - ((int) (Math.pow(2, i - 3)))); j <= (midNum - 1) / 2
                            + (int) (Math.pow(2, i - 2)); j++) {
                board[i][j] = 'X';
                board[midNum - i][midNum - j] = 'X';
            }
        }

        erase(board, 4, 4);
        erase(board, 4, 5);
        erase(board, 5, 4);
        erase(board, 5, 5);

        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                System.out.print(board[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void erase(char[][] b, int i, int j) {
        b[i][j] = 'O';
    }
}