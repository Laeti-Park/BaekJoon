import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;

public class Baek2161 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int caseNum = Integer.parseInt(br.readLine());
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < caseNum; i++) {
            queue.offer(i + 1);
        }

        while (queue.size() != 1) {
            System.out.print(queue.poll().toString() + " ");
            queue.add(queue.poll());
        }
        System.out.print(queue.poll()); 
    }
}